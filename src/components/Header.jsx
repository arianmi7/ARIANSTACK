import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { btn, btnPrimary } from '../ui'

const navItems = [
  { label: 'خانه', href: '#home' },
  { label: 'رودمپ', href: '#features' },
  { label: 'رزومه‌ساز', href: '#features' },
  { label: 'پروژه‌ها', href: '#features' },
  { label: 'CRM', href: '#features' },
  { label: 'اشتراک کد', href: '#features' },
  { label: 'اخبار', href: '#news' },
  { label: 'پشتیبانی', href: '#support' },
]

const navClass =
  'text-sm text-muted transition-all duration-300 hover:text-brand hover:drop-shadow-[0_0_8px_var(--glow)]'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 border-b border-line bg-header backdrop-blur-xl'>
      <div className='container mx-auto px-5'>
        <div className='flex h-20 items-center justify-between gap-4'>
          {/* لوگو */}
          <a href='/' className='flex items-center gap-x-2.5'>
            <img src='arianstack-icon.PNG' alt='ArianStack icon' className='size-12 rounded-2xl' />
            <div className='hidden sm:block'>
              <h1 className='text-xl font-semibold text-main'>ArianStack</h1>
              <p className='text-xs text-brand'>از یادگیری کد تا گرفتن پروژه در یک مسیر</p>
            </div>
          </a>

          {/* منو دسکتاپ */}
          <nav className='hidden lg:flex items-center gap-x-7'>
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className={navClass}>
                {n.label}
              </a>
            ))}
          </nav>

          {/* دکمه‌ها */}
          <div className='flex items-center gap-x-3'>
            <ThemeToggle />
            <button className={`${btn} hidden sm:inline-flex`}>ورود</button>
            <button className={`${btnPrimary} hidden sm:inline-flex`}>ثبت‌نام</button>
            <button
              onClick={() => setOpen(!open)}
              aria-label='منو'
              className='lg:hidden size-11 flex items-center justify-center rounded-xl border border-line bg-card cursor-pointer'
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* منو موبایل */}
      {open && (
        <div className='lg:hidden border-t border-line bg-page'>
          <nav className='container mx-auto px-5 py-4 flex flex-col gap-4'>
            {navItems.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className={navClass}>
                {n.label}
              </a>
            ))}
            <div className='flex gap-3 pt-2 sm:hidden'>
              <button className={`${btn} flex-1`}>ورود</button>
              <button className={`${btnPrimary} flex-1`}>ثبت‌نام</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
