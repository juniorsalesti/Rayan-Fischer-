import {WHATSAPP_URL} from '../constants';
import {BrandMark} from './BrandMark';
import {WhatsAppIcon} from './WhatsAppIcon';

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.08] pt-12 pb-20 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7 sm:gap-8">
          {/* Brand & Credentials */}
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <BrandMark className="h-8 w-auto max-w-[150px] sm:h-10 shrink-0" />
              <p className="font-display text-base sm:text-xl font-bold tracking-[0.04em] text-white uppercase">
                Rayan Fischer | Personal Trainer
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#C5C7C9] tabular-nums">
              <span>CREF: 208414-G/SP</span>
              <span className="text-[#D6A93C]" aria-hidden="true">
                ·
              </span>
              <span>Campinas – SP</span>
            </div>

            <p className="text-[11px] sm:text-sm tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#C5C7C9]/70">
              Saúde • Performance • Qualidade de vida
            </p>
          </div>

          {/* Direct WhatsApp Contact */}
          <div className="flex items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com Rayan Fischer no WhatsApp"
              className="group inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/15 bg-[#0E0E11] px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 active:scale-[0.98] hover:border-[#D6A93C] hover:text-[#D6A93C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A93C]"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#D6A93C] transition-transform duration-200 group-hover:scale-110" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#C5C7C9]/55">
          <p>© 2026 Rayan Fischer. Todos os direitos reservados.</p>
          <p>Rayan Fischer | Personal Trainer</p>
        </div>
      </div>
    </footer>
  );
}
