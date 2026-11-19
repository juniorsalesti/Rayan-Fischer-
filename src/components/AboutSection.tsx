import {motion} from 'motion/react';
import {ASSETS} from '../constants';
import {SafeImage} from './SafeImage';

const CREDENTIALS = [
  {label: 'Atuação', value: 'Personal Trainer'},
  {label: 'Registro Profissional', value: 'CREF 208414-G/SP'},
  {label: 'Atendimento', value: 'Campinas – SP'},
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative bg-[#050505] py-16 sm:py-28 lg:py-32 border-t border-white/[0.07]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-stretch">
          {/* Portrait Column — 3:4 aspect on mobile for vertical adaptation */}
          <motion.div
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.15}}
            transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-5"
          >
            <div className="group relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[560px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E11]">
              <SafeImage
                src={ASSETS.trainerPortrait}
                alt="Rayan Fischer, profissional de Educação Física e Personal Trainer em Campinas"
                fallbackLabel="Rayan Fischer · Personal Trainer"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Glassmorphic Bottom Editorial Bar */}
              <div className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 rounded-xl border border-white/10 bg-[#050505]/75 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between gap-3">
                <div>
                  <p className="font-display text-sm font-semibold tracking-wide text-white">
                    Rayan Fischer
                  </p>
                  <p className="text-xs text-[#C5C7C9]">Educação Física</p>
                </div>
                <span className="text-[11px] sm:text-xs font-medium tracking-[0.05em] text-[#D6A93C] tabular-nums whitespace-nowrap">
                  CREF 208414-G/SP
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.15}}
            transition={{duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#D6A93C]">
              <span className="h-[1px] w-6 sm:w-7 bg-[#D6A93C]" aria-hidden="true" />
              <span>Apresentação Profissional</span>
            </div>

            <h2 className="mt-4 sm:mt-5 font-display text-[1.85rem] sm:text-4xl lg:text-[3.1rem] font-bold leading-[1.1] sm:leading-[1.08] tracking-[-0.025em] text-white">
              Seu objetivo merece um acompanhamento profissional.
            </h2>

            <p className="mt-4 sm:mt-6 max-w-2xl text-[15px] sm:text-lg leading-[1.7] sm:leading-[1.75] text-[#C5C7C9]">
              Cada pessoa possui objetivos, necessidades e limitações diferentes. Por isso, o
              acompanhamento personalizado é fundamental para desenvolver um treinamento alinhado à
              sua realidade, respeitando sua individualidade e buscando evolução contínua.
            </p>

            {/* Bento Credential Grid */}
            <div className="mt-7 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
              {CREDENTIALS.map((item) => (
                <div
                  key={item.value}
                  className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-[#0E0E11] px-4 py-3.5 sm:py-4 transition-colors duration-200 hover:border-[#D6A93C]/35"
                >
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C5C7C9]/70">
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-white tabular-nums">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
