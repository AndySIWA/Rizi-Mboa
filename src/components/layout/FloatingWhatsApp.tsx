import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_LINK } from '../../data/constants';

interface FloatingWhatsAppProps {
  show: boolean;
}

export default function FloatingWhatsApp({ show }: FloatingWhatsAppProps) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Commander sur WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
