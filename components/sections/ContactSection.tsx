import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import { LightFlowerDecoration } from "@/components/ui/FlowerDecoration"
import { CardFlowerDecoration } from "@/components/ui/WhiteAreaDecoration"
import {
  ArrowRight,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"
import { useTranslation } from "react-i18next"

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const { t, i18n } = useTranslation()
  
  // Helper function to get font class based on current language
    const getFontClass = () => {
    return i18n.language === 'ja' ? 'font-noto-sans-jp' :
           i18n.language === 'zh' ? 'font-noto-sans-sc' : 
           i18n.language === 'en' ? 'font-montserrat' : ''
  }
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // 确保阻止表单默认行为
    e.preventDefault();
    e.stopPropagation();
    
    // 验证必填字段
    if (!formData.name || !formData.email || !formData.service) {
      setSubmitStatus('error');
      setSubmitMessage(t('requiredFields'));
      return false;
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setSubmitMessage(t('invalidEmail'));
      return false;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        // 清空表单
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // 滚动到提示信息
        setTimeout(() => {
          const formElement = document.getElementById('contact-form');
          if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || t('sendFailed'));
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(t('networkError'));
    } finally {
      setIsSubmitting(false);
    }
    
    return false;
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
      {/* 花朵装饰 */}
      <LightFlowerDecoration />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" delay={100}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${getFontClass()}`} style={{ color: '#d1a73c' }}>{t('contactTitle')}</h2>
            <p className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 ${getFontClass()}`}>
              {t('contactDescription1')}
            </p>
            <p className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 ${getFontClass()}`}>
              {t('contactDescription2')}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={200}>
          <div className="flex justify-center items-center max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <Card className="border-accent/20 relative">
                {/* 卡片花朵装饰 */}
                <CardFlowerDecoration />
                <CardContent className="p-6 sm:p-8">
                  {/* 提交状态提示 */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-lg flex items-center shadow-sm animate-in slide-in-from-top-2 duration-300">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className={`text-green-800 font-medium text-sm ${getFontClass()}`}>{submitMessage}</p>
                        <p className={`text-green-600 text-xs mt-1 ${getFontClass()}`}>{t('successMessage')}</p>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg flex items-center shadow-sm animate-in slide-in-from-top-2 duration-300">
                      <AlertCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className={`text-red-800 font-medium text-sm ${getFontClass()}`}>{submitMessage}</p>
                        <p className={`text-red-600 text-xs mt-1 ${getFontClass()}`}>{t('errorMessage')}</p>
                      </div>
                    </div>
                  )}

                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={`text-foreground text-sm sm:text-base ${getFontClass()}`}>
                        {t('nameLabel')} *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder={t('namePlaceholder')}
                        className="border-border focus:border-accent text-base"
                        required
                        autoComplete="name"
                        inputMode="text"
                        style={{ fontSize: '16px' }}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className={`text-foreground text-sm sm:text-base ${getFontClass()}`}>
                        {t('emailLabel')} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder={t('emailPlaceholder')}
                        className="border-border focus:border-accent text-base"
                        required
                        autoComplete="email"
                        inputMode="email"
                        style={{ fontSize: '16px' }}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className={`text-foreground text-sm sm:text-base ${getFontClass()}`}>
                        {t('phoneLabel')}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder={t('phonePlaceholder')}
                        className="border-border focus:border-accent text-base"
                        autoComplete="tel"
                        inputMode="tel"
                        style={{ fontSize: '16px' }}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className={`text-foreground text-sm sm:text-base ${getFontClass()}`}>
                        {t('serviceLabel')} *
                      </Label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(value) => handleInputChange('service', value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="w-full border-border focus:border-accent text-base" style={{ fontSize: '16px' }}>
                          <SelectValue placeholder={t('servicePlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="k-gold-diamond">{t('serviceKGold')}</SelectItem>
                          <SelectItem value="gold-bars">{t('serviceGoldBars')}</SelectItem>
                          <SelectItem value="appraisal">{t('serviceAppraisal')}</SelectItem>
                          <SelectItem value="investment">{t('serviceInvestment')}</SelectItem>
                          <SelectItem value="partnership">{t('servicePartnership')}</SelectItem>
                          <SelectItem value="other">{t('serviceOther')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className={`text-foreground text-sm sm:text-base ${getFontClass()}`}>
                        {t('messageLabel')}
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder={t('messagePlaceholder')}
                        className="border-border focus:border-accent min-h-[120px] text-base"
                        rows={5}
                        autoComplete="off"
                        inputMode="text"
                        style={{ fontSize: '16px' }}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group text-sm sm:text-base"
                        disabled={isSubmitting}
                        onClick={(e) => {
                          if (isSubmitting) {
                            e.preventDefault();
                            e.stopPropagation();
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                            <span className={getFontClass()}>{t('sending')}</span>
                          </>
                        ) : (
                          <>
                            <MessageSquare className="text-center mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                            <span className={getFontClass()}>{t('sendButton')}</span>
                          </>
                        )}
                      </Button>
                    </div>

                    <p className={`text-xs sm:text-sm text-muted-foreground text-center ${getFontClass()}`}>
                      {t('privacyMessage')}
                    </p>
                    <p className={`text-xs sm:text-sm text-muted-foreground text-center ${getFontClass()}`}>
                      {t('responseMessage')}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollAnimation>

        {/* Additional Contact Options */}
        <ScrollAnimation animation="fadeIn" delay={300}>
          <div className="mt-12 sm:mt-16">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Company Information - Left Side */}
              <div className="rounded-2xl p-6 sm:p-8 border border-accent/20 relative">
                {/* 卡片花朵装饰 */}
                <CardFlowerDecoration />
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${getFontClass()}`} style={{ color: '#d1a73c' }}>{t('companyLegalName')}</h4>
                    <p className={`text-foreground text-sm sm:text-base ${getFontClass()}`}>{t('companyNameLegal')}</p>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h5 className={`text-sm sm:text-base font-semibold mb-2 ${getFontClass()}`} style={{ color: '#d1a73c' }}>{t('companyAddress')}</h5>
                      <div className={`text-foreground text-sm sm:text-base ${getFontClass()}`}>
                        <p>{t('companyAddressDetail')}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className={`text-sm sm:text-base font-semibold mb-2 ${getFontClass()}`} style={{ color: '#d1a73c' }}>{t('companyNumber')}</h5>
                      <p className={`text-foreground text-sm sm:text-base ${getFontClass()}`}>{t('companyNumberValue')}</p>
                    </div>
                    
                    <div>
                      <h5 className={`text-sm sm:text-base font-semibold mb-2 ${getFontClass()}`} style={{ color: '#d1a73c' }}>{t('companyCapital')}</h5>
                      <p className={`text-foreground text-sm sm:text-base ${getFontClass()}`}>{t('companyCapitalValue')}</p>
                    </div>
                    
                    <div>
                      <h5 className={`text-sm sm:text-base font-semibold mb-2 ${getFontClass()}`} style={{ color: '#d1a73c' }}>{t('companyBusiness')}</h5>
                      <div className={`text-foreground text-sm sm:text-base ${getFontClass()}`}>
                        <p>{t('companyBusinessDetail')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Map - Right Side */}
              <div className="rounded-2xl p-6 sm:p-8 border border-accent/20 relative">
                {/* 卡片花朵装饰 */}
                <CardFlowerDecoration />
                <div className="h-full w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.1234567890123!2d135.50000000000000!3d34.68194444444444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e5b5b5b5b5b5%3A0x1234567890123456!2z5aSn6YGT44Kq44Oq44Kk44Oq44Oq44O85YyW5aSn6YGT44Kq44Oq44Kk44Oq44O85YyW!5e0!3m2!1sja!2sjp!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="大阪ゴールドトレーディング 所在地"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}