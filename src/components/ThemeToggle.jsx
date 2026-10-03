import useTheme from '../hooks/useTheme'

export default function ThemeToggle() {
  const [dark, toggle] = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label='تغییر تم'
      className='size-11 flex items-center justify-center rounded-xl border border-line bg-card cursor-pointer transition-all duration-300 hover:border-brand hover:shadow-[0_0_14px_var(--glow)]'
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}
