// components/WhatsAppButton.tsx
import React from "react";
import Image from "next/image";
import styles from "./WhatsAppButton.module.css";

interface WhatsAppButtonProps {
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({message =""}) => {
  const encodedMessage = encodeURIComponent(message);
  const phone="+919994466889"
  const link = `https://wa.me/${phone}${message ? `?text=${encodedMessage}` : ""}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
    >
      <Image
        src="https://img.icons8.com/color/32/000000/whatsapp--v1.png" // smaller icon version
        alt="WhatsApp"
        width={30}
        height={30}
      />
    </a>
  );
};

export default WhatsAppButton;
