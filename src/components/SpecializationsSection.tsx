import {useState} from 'react';
import {motion} from 'motion/react';
import {Activity, Brain, HeartHandshake, ArrowUpRight} from 'lucide-react';
import {WHATSAPP_URL} from '../constants';

const SPECIALIZATIONS = [
  {
    id: 'psicomotricidade',
    index: '01',
    title: 'Psicomotricidade',
    description: 'Pós-graduação em Psicomotricidade.',
    icon: Activity,
  },
  {
    id: 'psicopedagogia',
    index: '02',
    title: 'Psicopedagogia',
    description: 'Pós-graduação em Psicopedagogia.',
    icon: Brain,
  },
  {
    id: 'educacao-especial',
    index: '03',
    title: 'Educação Especial',
    description: 'Pós-graduação em Educação Especial.',
    icon: HeartHandshake,
  },
];

export function SpecializationsSection() {
  const [activeId, setActiveId] = useState(SPECIALIZATIONS[0].id);

  return (
    <section
      id="especializacoes"
      className="relative bg-[#050505] py-16 sm:py-28 lg:py-32 border-t border-white/[0.07]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Sticky Editorial Header Column */}
          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.15}}
            transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#D6A93C]">
              <span className="h-[1px] w-6 sm:w-7 bg-[#D6A93C]" aria-hidden="true" />
              <span>Especializações</span>
            </div>

            <h2 className="mt-4 sm:mt-5 font-display text-[1.85rem] sm:text-4xl lg:text-[3.1rem] font-bold leading-[1.1] sm:leading-[1.08] tracking-[-0.025em] text-white">
              Conhecimento que transforma resultados.
            </h2>

            <div className="mt-8 hidden lg:block">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#D6A93C]"
              >
                <span>Quero minha consultoria</span>
                <ArrowUpRight
                  className="h-4 w-4 text-[#D6A93C] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>

          {/* Interactive Architectural Stack Column */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
            {SPECIALIZATIONS.map((spec, idx) => {
              const Icon = spec.icon;
              const isActive = activeId === spec.id;

              return (
                <motion.button
                  key={spec.id}
                  type="button"
                  onMouseEnter={() => setActiveId(spec.id)}
                  onFocus={() => setActiveId(spec.id)}
                  onClick={() => setActiveId(spec.id)}
                  initial={{opacity: 0, y: 18}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, amount: 0.15}}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group text-left w-full rounded-2xl border p-5 sm:p-8 transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A93C] ${
                    isActive
                      ? 'border-[#D6A93C]/50 bg-gradient-to-br from-[#16161A] via-[#101013] to-[#0B0B0D] -translate-y-0.5'
                      : 'border-white/[0.08] bg-[#0E0E11] hover:border-white/20 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-5">
                    <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                      <div
                        className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border transition-colors duration-200 ${
                          isActive
                            ? 'border-[#D6A93C]/60 bg-[#D6A93C]/12 text-[#D6A93C]'
                            : 'border-white/10 bg-[#050505] text-[#C5C7C9] group-hover:text-[#D6A93C]'
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-display text-lg sm:text-2xl font-bold tracking-tight text-white">
                          {spec.title}
                        </h3>
                        <p className="mt-0.5 sm:mt-1 text-sm sm:text-base text-[#C5C7C9]">
                          {spec.description}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`shrink-0 font-display text-sm sm:text-base font-semibold tabular-nums transition-colors duration-200 ${
                        isActive ? 'text-[#D6A93C]' : 'text-[#C5C7C9]/35'
                      }`}
                    >
                      {spec.index}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
