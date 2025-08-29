"use client"

import React, { useState } from "react"
import { X, MessageCircle, Instagram } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface FloatingQRCodeProps {
  className?: string
}

export default function FloatingQRCode({ className }: FloatingQRCodeProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<'line' | 'instagram' | null>(null)

  const toggleQR = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setSelectedPlatform(null)
    }
  }

  const selectPlatform = (platform: 'line' | 'instagram') => {
    setSelectedPlatform(platform)
  }

  return (
    <>
      {/* Floating Action Button */}
      <div className={cn(
        "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50",
        className
      )}>
        <button
          onClick={toggleQR}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110 group animate-in slide-in-from-bottom"
        >
          <div className="flex flex-col items-center space-y-1">
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-xs font-medium hidden sm:block">相談</span>
          </div>
        </button>
      </div>

      {/* QR Code Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleQR}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 mx-4 overflow-hidden">
            <div className="bg-green-500 text-white p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">SNS相談</h3>
                <button
                  onClick={toggleQR}
                  className="text-white hover:text-gray-200 transition-colors p-1"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              {!selectedPlatform ? (
                // Platform Selection
                <div className="space-y-4">
                  <p className="text-center text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    ご希望の相談方法をお選びください
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {/* LINE Option */}
                    <button
                      onClick={() => selectPlatform('line')}
                      className="flex flex-col items-center p-3 sm:p-4 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <span className="font-semibold text-green-600 text-sm sm:text-base">LINE</span>
                    </button>

                    {/* Instagram Option */}
                    <button
                      onClick={() => selectPlatform('instagram')}
                      className="flex flex-col items-center p-3 sm:p-4 border-2 border-pink-200 rounded-xl hover:border-pink-500 hover:bg-pink-50 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                        <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <span className="font-semibold text-pink-600 text-sm sm:text-base">Instagram</span>
                    </button>
                  </div>
                </div>
              ) : (
                // QR Code Display
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="text-base sm:text-lg font-semibold mb-2">
                      {selectedPlatform === 'line' ? 'LINE 相談' : 'Instagram 相談'}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-4">
                      QRコードをスキャンしてください
                    </p>
                  </div>

                  {/* QR Code */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <Image
                        src={selectedPlatform === 'line' ? '/gold-line-code.jpg' : '/gold-ins-code.png'}
                        alt={`${selectedPlatform === 'line' ? 'LINE' : 'Instagram'} QR Code`}
                        width={160}
                        height={160}
                        className="rounded-lg shadow-lg w-40 h-40 sm:w-48 sm:h-48"
                      />
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="text-xs sm:text-sm text-gray-600">
                      スマートフォンで QRコードをスキャン
                    </p>
                    <p className="text-xs text-gray-500">
                      展示・サービスのご相談など 何でもお気軽にお聞きください
                    </p>
                  </div>

                  {/* Back Button */}
                  <button
                    onClick={() => setSelectedPlatform(null)}
                    className="w-full mt-4 py-2 px-4 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm"
                  >
                    選択に戻る
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
