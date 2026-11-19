import {WHATSAPP_URL} from '../constants';
import {WhatsAppIcon} from './WhatsAppIcon';

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Iniciar conversa com Rayan Fischer no WhatsApp"
      title="Falar no WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6 z-40 inline-flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#D6A93C] text-[#050505] shadow-[0_8px_24px_rgba(0,0,0,0.65)] ring-1 ring-white/15 transition-all duration-200 active:scale-95 hover:scale-105 hover:bg-[#e2b84e] hover:shadow-[0_0_24px_rgba(214,169,60,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  );
}
