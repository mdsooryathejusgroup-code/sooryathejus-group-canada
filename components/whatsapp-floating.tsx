"use client"

import React from "react"
import Image from "next/image"

interface WhatsAppButtonProps {
  message?: string;
}

const WhatsAppFloatingButton: React.FC<WhatsAppButtonProps> = ({
  phone = "+16478571370",
  message = "Hello! I need assistance.",
}) => {
  const encodedMessage = encodeURIComponent(message)
  const link = `https://wa.me/${phone}${message ? `?text=${encodedMessage}` : ""}`

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
        width={30}
        height={30}
      />
    </a>
  )
}

export default WhatsAppFloatingButton
