import {motion} from 'motion/react';
import {ASSETS} from '../constants';
import {SafeImage} from './SafeImage';

const PILLARS = [
  {
    index: '01',
    title: 'SAÚDE',
    description: 'Priorize seu bem-estar e desenvolva hábitos mais saudáveis.',
    image: ASSETS.pillarHealth,
    alt: 'Treinamento focado em saúde, mobilidade e controle corporal',
    imagePosition: 'object-[center_22%]',
    spanClass: 'lg:col-span-6 lg:row-span-1 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[300px]',
  },
  {
    index: '02',
    title: 'PERFORMANCE',
    description: 'Trabalhe sua evolução e desenvolva seu potencial físico.',
    image: ASSETS.pillarPerformance,
    alt: 'Treinamento de força e alta performance com barra olímpica',
    imagePosition: 'object-center',
    spanClass: 'lg:col-span-6 lg:row-span-2 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[624px]',
  },
  {
    index: '03',
    title: 'QUALIDADE DE VIDA',
    description: 'Invista em movimento, equilíbrio e uma vida mais ativa.',
    image: ASSETS.pillarQualityOfLife,
    alt: 'Movimento funcional em estúdio iluminado promovendo qualidade de vida',
    imagePosition: 'object-[center_20%]',
    spanClass: 'lg:col-span-6 lg:row-span-1 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[300px]',
  },
];

export function PillarsSection() {
  return (
    <section
      id="pilares"
      className="bg-[#050505] py-16 sm:py-28 lg:py-32 border-t border-white/[0.07]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.15}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#D6A93C]">
              <span className="h-[1px] w-6 sm:w-7 bg-[#D6A93C]" aria-hidden="true" />
              <span>Pilares do Treinamento</span>
            </div>

            <h2 className="mt-4 sm:mt-5 font-display text-[1.85rem] sm:text-4xl lg:text-[3.1rem] font-bold leading-[1.1] sm:leading-[1.08] tracking-[-0.025em] text-white">
              Mais do que treinar. Evoluir em todos os aspectos.
            </h2>
          </div>

          <p className="text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-[0.14em] uppercase text-[#C5C7C9]/70 sm:whitespace-nowrap">
            Saúde · Performance · Qualidade de vida
          </p>
        </motion.div>

        {/* Single Column on Mobile -> Asymmetric Editorial Bento Grid on Desktop */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {PILLARS.map((pillar, idx) => (
            <motion.article
              key={pillar.title}
              initial={{opacity: 0, y: 18}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.15}}
              transition={{
                duration: 0.45,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0E0E11] transition-colors duration-200 hover:border-[#D6A93C]/50 ${pillar.spanClass}`}
            >
              <SafeImage
                src={pillar.image}
                alt={pillar.alt}
                fallbackLabel={pillar.title}
                className={`absolute inset-0 h-full w-full object-cover ${pillar.imagePosition} transition-transform duration-700 group-hover:scale-[1.05]`}
              />

              {/* Measured Contrast Scrim */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/15 transition-opacity duration-300 group-hover:opacity-95"
                aria-hidden="true"
              />

              {/* Index Top-Left */}
              <span
                className="absolute top-4 left-5 sm:top-5 sm:left-6 font-display text-xs font-semibold tracking-[0.18em] text-[#D6A93C] tabular-nums"
                aria-hidden="true"
              >
                {pillar.index}
              </span>

              {/* Bottom Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-8">
                <h3 className="font-display text-xl sm:text-3xl font-bold tracking-[-0.01em] text-white transition-colors duration-200 group-hover:text-[#D6A93C]">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 sm:mt-2 max-w-md text-sm sm:text-base leading-relaxed text-[#C5C7C9]">
                  {pillar.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
