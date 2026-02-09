"use client"

import React, { useState } from 'react'
import { useTranslation } from "react-i18next"
import Image from "next/image"
import { X } from "lucide-react"

export default function FixedContactWidget() {
  const { t, i18n } = useTranslation()
  const [showQR, setShowQR] = useState<'whatsapp' | 'wechat' | 'line' | 'instagram' | null>(null)

  // Helper function to get font class based on current language
  const getFontClass = () => {
    return i18n.language === 'ja' ? 'font-noto-sans-jp' : 
           i18n.language === 'zh' ? 'font-noto-sans-sc' : 
           i18n.language === 'en' ? 'font-montserrat' : 
           i18n.language === 'vi' ? 'font-montserrat' : ''
  }

  return (
    <>
      <div className="fixed right-2 sm:right-4 bottom-4 z-40 flex flex-col space-y-2">
        {/* WhatsApp Contact */}
        <button
          onClick={() => setShowQR('whatsapp')}
          className="group text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center min-w-[100px] sm:min-w-[120px]"
          style={{ backgroundColor: '#3b82f6' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
        >
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className={`text-xs sm:text-sm font-medium ${getFontClass()}`}>
              WhatsApp
            </span>
          </div>
        </button>

        {/* WeChat Contact */}
        <button
          onClick={() => setShowQR('wechat')}
          className="group bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center min-w-[100px] sm:min-w-[120px]"
        >
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.042-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.237-1.98 6.441-1.838-.576-3.583-4.196-6.348-8.496-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.179c0-.651.52-1.18 1.162-1.18zm5.34 3.218c-2.316 0-4.378 1.512-5.063 3.682-.923 2.916.392 5.228 1.687 6.884a.95.95 0 0 1 .198.606c-.02.3-.1.608-.1.923 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098c.91.252 1.873.4 2.877.4 3.801 0 6.89-2.9 6.89-6.478 0-3.578-3.088-6.478-6.89-6.478zm-2.846 4.22c.45 0 .815.37.815.827a.822.822 0 0 1-.815.826.822.822 0 0 1-.815-.826c0-.457.365-.827.815-.827zm5.691 0c.45 0 .815.37.815.827a.822.822 0 0 1-.815.826.822.822 0 0 1-.815-.826c0-.457.365-.827.815-.827z"/>
            </svg>
            <span className={`text-xs sm:text-sm font-medium ${getFontClass()}`}>
              WeChat
            </span>
          </div>
        </button>

        {/* LINE Contact */}
        <button
          onClick={() => setShowQR('line')}
          className="group bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center min-w-[100px] sm:min-w-[120px]"
        >
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.628-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            <span className={`text-xs sm:text-sm font-medium ${getFontClass()}`}>
              LINE
            </span>
          </div>
        </button>

        {/* Instagram Contact */}
        <button
          onClick={() => setShowQR('instagram')}
          className="group bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center min-w-[100px] sm:min-w-[120px]"
        >
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className={`text-xs sm:text-sm font-medium ${getFontClass()}`}>
              Instagram
            </span>
          </div>
        </button>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowQR(null)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 mx-4 overflow-hidden">
            <div 
              className="text-white p-4"
              style={
                showQR === 'whatsapp' 
                  ? { backgroundColor: '#3b82f6' } 
                  : showQR === 'wechat' || showQR === 'line'
                  ? { backgroundColor: '#22c55e' }
                  : {}
              }
            >
              {showQR === 'instagram' && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500" />
              )}
              <div className="relative z-10 flex items-center justify-between">
                <h3 className={`text-lg font-semibold ${getFontClass()}`}>
                  {showQR === 'whatsapp' ? t('whatsappConsultation') :
                   showQR === 'wechat' ? t('wechatConsultation') : 
                   showQR === 'line' ? t('lineConsultation') : 
                   t('instagramConsultation')}
                </h3>
                <button
                  onClick={() => setShowQR(null)}
                  className="text-white hover:text-gray-200 transition-colors p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="text-center space-y-4">
                <p className={`text-sm text-gray-600 mb-4 ${getFontClass()}`}>
                  {showQR === 'wechat' ? t('scanWeChatQRCode') : t('scanQRCode')}
                </p>
                
                {/* QR Code */}
                <div className="flex justify-center">
                  <div className="relative">
                    <Image
                      src={
                        showQR === 'whatsapp' ? '/gold-whatsapp-code.jpg' :
                        showQR === 'wechat' ? '/gold-wechat-code.png' :
                        showQR === 'line' ? '/gold-line-code.jpg' : 
                        '/gold-ins-code.png'
                      }
                      alt={`${
                        showQR === 'whatsapp' ? 'WhatsApp' :
                        showQR === 'wechat' ? 'WeChat' : 
                        showQR === 'line' ? 'LINE' : 
                        'Instagram'
                      } QR Code`}
                      width={200}
                      height={200}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                {showQR === 'line' && (
                  <>
                    <a 
                      href="https://line.me/ti/p/SdCL9gXx-w"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-green-600 hover:text-green-700 underline hover:no-underline transition-colors cursor-pointer block"
                    >
                      https://line.me/ti/p/SdCL9gXx-w
                    </a>
                    <p className="text-sm text-gray-600 font-medium">
                      LineID: osakagold
                    </p>
                  </>
                )}

                <p className={`text-xs text-gray-500 ${getFontClass()}`}>
                  {t('consultationMessage')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
