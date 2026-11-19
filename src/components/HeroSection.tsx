import {motion} from 'motion/react';
import {ArrowUpRight, ArrowDown} from 'lucide-react';
import {ASSETS, WHATSAPP_URL} from '../constants';
import {SafeImage} from './SafeImage';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#050505] pt-20 pb-6 sm:pt-28 sm:pb-10"
    >
      {/* Background Media + Subtle Architectural Grid + Atmospheric Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <SafeImage
          src={ASSETS.heroBg}
          alt="Ambiente de academia moderno com iluminação cinematográfica"
          loading="eager"
          className="h-full w-full object-cover object-center hero-bg-motion opacity-55 sm:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 sm:via-[#050505]/65 to-[#050505]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 sm:via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 architectural-grid opacity-45 sm:opacity-55 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        <div
          className="absolute -top-24 right-0 h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(214,169,60,0.45) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Main Focal Content */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
            className="mb-4 sm:mb-6 flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm tracking-[0.14em] sm:tracking-[0.16em] uppercase"
          >
            <span className="h-[1px] w-6 sm:w-8 bg-[#D6A93C]" aria-hidden="true" />
            <span className="font-semibold text-white">Rayan Fischer</span>
            <span className="text-[#D6A93C]" aria-hidden="true">
              ·
            </span>
            <span className="text-[#C5C7C9]">Personal Trainer</span>
          </motion.div>

          <motion.h1
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
            className="font-display font-bold tracking-[-0.03em] text-white leading-[1.04] sm:leading-[1.02] text-[clamp(2.15rem,8.5vw,4.85rem)]"
          >
            Supere seus limites.{' '}
            <span className="bg-gradient-to-r from-white via-[#F5E3B3] to-[#D6A93C] bg-clip-text text-transparent">
              Construa sua melhor versão.
            </span>
          </motion.h1>

          <motion.p
            initial={{opacity: 0, y: 14}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1]}}
            className="mt-4 sm:mt-6 max-w-xl text-[15px] sm:text-xl leading-relaxed text-[#C5C7C9] font-normal"
          >
            Treinamento personalizado com foco em saúde, performance e qualidade de vida.
          </motion.p>

          <motion.div
            initial={{opacity: 0, y: 14}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1]}}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-5"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex min-h-[50px] sm:min-h-[52px] w-full sm:w-auto items-center justify-center gap-2.5 sm:gap-3 overflow-hidden rounded-full bg-[#D6A93C] px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#050505] whitespace-nowrap shrink-0 transition-all duration-200 active:scale-[0.98] hover:bg-[#e5bc55] hover:shadow-[0_0_32px_rgba(214,169,60,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Quero minha consultoria</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href="#sobre"
              className="inline-flex min-h-[48px] sm:min-h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white backdrop-blur-sm whitespace-nowrap shrink-0 transition-all duration-200 active:scale-[0.98] hover:border-[#D6A93C]/60 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A93C]"
            >
              <span>Saiba mais</span>
              <ArrowDown className="h-4 w-4 text-[#D6A93C]" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Architectural Credibility Bar */}
      <motion.div
        initial={{opacity: 0, y: 12}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1]}}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 border-t border-white/12 pt-4 sm:pt-5 text-xs sm:text-sm text-[#C5C7C9]">
          <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1 font-medium tracking-[0.05em] tabular-nums">
            <span className="text-white">CREF 208414-G/SP</span>
            <span className="text-[#D6A93C]" aria-hidden="true">
              |
            </span>
            <span>Campinas – SP</span>
          </div>

          <p className="text-[11px] sm:text-xs tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#C5C7C9]/75">
            Saúde · Performance · Qualidade de vida
          </p>
        </div>
      </motion.div>
    </section>
  );
}
