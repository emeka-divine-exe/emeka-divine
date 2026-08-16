import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="hidden md:flex sticky top-0 z-50 items-center justify-between px-10 py-5 bg-bg/90 backdrop-blur-md border-b border-surface">
        <a href="#home" className="font-display text-lg tracking-tight text-cream">
          Divine
        </a>

        <ul className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-cream/80 hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-accent text-bg text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          <Download size={16} strokeWidth={2.5} />
          Download Resume
        </a>
      </nav>

      {/* MOBILE NAV — pill + hamburger, matches reference */}
      <nav className="md:hidden sticky top-0 z-50 flex justify-center pt-4 px-4">
        <div className="flex items-center justify-between w-full max-w-md gap-6 bg-surface/90 backdrop-blur-md border border-cream/10 rounded-full pl-5 pr-2 py-2">
          <a href="#home" className="font-display text-base text-cream">
            Divine
          </a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full bg-bg flex items-center justify-center"
          >
            {open ? (
              <X size={18} className="text-cream" />
            ) : (
              <Menu size={18} className="text-cream" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed top-24 left-4 right-4 z-40 bg-surface border border-cream/10 rounded-3xl p-6 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-cream text-base py-3 border-b border-cream/10 last:border-none"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-accent text-bg text-sm font-semibold px-5 py-3 rounded-full mt-4"
            >
              <Download size={16} strokeWidth={2.5} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
