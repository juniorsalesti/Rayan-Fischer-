import {motion} from 'motion/react';
import {ArrowUpRight} from 'lucide-react';
import {ASSETS, WHATSAPP_URL} from '../constants';
import {SafeImage} from './SafeImage';
import {WhatsAppIcon} from './WhatsAppIcon';

export function CtaSection() {
  return (
    <section
      id="consultoria"
      className="relative overflow-hidden bg-[#050505] py-16 sm:py-28 lg:py-32 border-t border-white/[0.07]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.15}}
          transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/12 bg-[#0E0E11] px-5 py-10 sm:px-14 sm:py-20 lg:px-20"
        >
          {/* Atmospheric Backdrop Inside Bento Spotlight */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <SafeImage
              src={ASSETS.ctaBg}
              alt="Equipamentos de treinamento de alta performance em ambiente escuro"
              className="h-full w-full object-cover object-center opacity-35 sm:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#050505] via-[#050505]/88 to-[#050505]/60" />
            <div
              className="absolute -bottom-24 -left-24 h-64 w-64 sm:h-80 sm:w-80 rounded-full opacity-25 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(214,169,60,0.45) 0%, transparent 70%)',
              }}
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#D6A93C]">
              <span className="h-[1px] w-6 sm:w-7 bg-[#D6A93C]" aria-hidden="true" />
              <span>Consultoria Personalizada</span>
            </div>

            <h2 className="mt-4 sm:mt-5 font-display text-[1.9rem] sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] sm:leading-[1.06] tracking-[-0.025em] text-white">
              Está pronto para começar sua evolução?
            </h2>

            <p className="mt-4 sm:mt-5 max-w-xl text-[15px] sm:text-lg leading-relaxed text-[#C5C7C9]">
              Tenha um acompanhamento profissional e descubra como um treinamento personalizado pode
              fazer parte da sua transformação.
            </p>

            <div className="mt-7 sm:mt-9">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[52px] sm:min-h-[54px] w-full sm:w-auto items-center justify-center gap-2.5 sm:gap-3 rounded-full bg-[#D6A93C] px-5 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-base font-bold uppercase tracking-[0.06em] sm:tracking-[0.07em] text-[#050505] transition-all duration-200 active:scale-[0.98] hover:bg-[#e5bc55] hover:shadow-[0_0_34px_rgba(214,169,60,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span className="whitespace-nowrap">Falar com Rayan no WhatsApp</span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
