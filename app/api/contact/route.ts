import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 创建邮件传输器
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'hanpuku01@gmail.com',
    pass: process.env.GMAIL_PASS || 'ucnn ovxx aesc vhrj'
  }
});

// 验证邮件配置
transporter.verify(function(error: any, success: any) {
  if (error) {
    console.log('SMTP 服务器连接失败:', error);
  } else {
    console.log('SMTP 服务器连接成功');
  }
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // 验证必填字段
    if (!name || !email || !service) {
      return NextResponse.json(
        { error: 'お名前、メールアドレス、サービス要望は必須項目です。' },
        { status: 400 }
      );
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください。' },
        { status: 400 }
      );
    }

    // 邮件内容
    const mailOptions = {
      from: 'hanpuku01@gmail.com', // 必须使用验证过的发送邮箱
      to: 'hanpuku01@gmail.com', // 发送到指定的 Gmail
      replyTo: email, // 回复地址设置为填写表格的人的邮箱
      subject: `【大阪ゴールドトレーディング】新しいお問い合わせ - ${name}様`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #d1a73c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h3 style="margin: 0; font-size: 24px;">大阪ゴールドトレーディング</h3>
            <p style="margin: 5px 0 0 0; font-size: 16px;">新しいお問い合わせ - ${name}様より</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #d1a73c; margin-top: 0;">お客様情報</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">お名前:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">メールアドレス:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">電話番号:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">サービス要望:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${getServiceName(service)}</td>
              </tr>
            </table>
            
            ${message ? `
            <h3 style="color: #d1a73c; margin-top: 30px;">詳細メッセージ</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #d1a73c;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                <strong>送信日時:</strong> ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>このメールは大阪ゴールドトレーディングのウェブサイトから自動送信されました。</p>
          </div>
        </div>
      `
    };

    // 发送邮件
    const info = await transporter.sendMail(mailOptions);
    
    console.log('邮件发送成功:', info.messageId);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'お問い合わせを送信いたしました。24時間以内にご返信いたします。',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('邮件发送失败:', error);
    return NextResponse.json(
      { 
        error: 'メールの送信に失敗しました。しばらく時間をおいて再度お試しください。' 
      },
      { status: 500 }
    );
  }
}

// 服务类型映射
function getServiceName(serviceValue: string): string {
  const serviceMap: { [key: string]: string } = {
    'k-gold-diamond': 'K18金',
    'gold-bars': 'インゴットの購入・売却',
    'appraisal': '貴金属・宝石鑑定',
    'investment': '資産運用',
    'partnership': 'パートナーシップ',
    'other': 'その他のお問い合わせ'
  };
  
  return serviceMap[serviceValue] || serviceValue;
}
