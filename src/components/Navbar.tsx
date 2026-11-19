import {useState, useEffect} from 'react';
import {Menu, X, ArrowUpRight} from 'lucide-react';
import {BrandMark} from './BrandMark';
import {WHATSAPP_URL} from '../constants';

const NAV_LINKS = [
  {label: 'Sobre', href: '#sobre'},
  {label: 'Especializações', href: '#especializacoes'},
  {label: 'Pilares', href: '#pilares'},
  {label: 'Contato', href: '#consultoria'},
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled || mobileOpen
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08]'
          : 'bg-gradient-to-b from-[#050505]/85 to-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 md:h-16 max-w-6xl items-center justify-between gap-4 md:gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#inicio"
          onClick={handleLinkClick}
          className="flex items-center gap-2.5 sm:gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A93C] rounded-md"
        >
          <BrandMark className="h-8 w-auto max-w-[130px] sm:h-9 shrink-0" />
          <span className="font-display text-base sm:text-lg font-bold tracking-[0.04em] text-white uppercase">
            Rayan Fischer
          </span>
        </a>

        {/* Zone 2: Concise single-line text navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#C5C7C9]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#D6A93C] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A93C] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#D6A93C] px-5 py-2 text-xs font-bold uppercase tracking-[0.07em] text-[#050505] whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-[#e3b94f] hover:shadow-[0_0_24px_rgba(214,169,60,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Consultoria</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex md:hidden items-center justify-center h-11 w-11 -mr-2 text-[#C5C7C9] hover:text-white active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A93C] rounded-lg"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Compact Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-white/10 bg-[#050505]/98 backdrop-blur-xl px-4 pt-3 pb-6 overscroll-contain"
        >
          <nav className="flex flex-col" aria-label="Menu mobile">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex min-h-[48px] items-center justify-between border-b border-white/[0.06] py-3 text-base font-medium text-[#C5C7C9] transition-colors active:text-white hover:text-white"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4 text-[#D6A93C]/70" aria-hidden="true" />
              </a>
            ))}
          </nav>

          <div className="mt-5 space-y-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#D6A93C] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.07em] text-[#050505] active:scale-[0.98] transition-all hover:bg-[#e3b94f]"
            >
              <span>Quero minha consultoria</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <p className="text-center text-xs tracking-[0.08em] text-[#C5C7C9]/70 tabular-nums">
              CREF 208414-G/SP · Campinas – SP
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
