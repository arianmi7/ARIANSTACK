import { card, sectionTitle, sectionSub } from '../ui'

const news = [
  { title: '۵ تغییر مهم در نسخه جدید React که باید بدانید', meta: '۱۰ مهر ۱۴۰۵ · فرانت‌اند', grad: 'from-brand2 to-brand' },
  { title: 'هوش مصنوعی چطور کار برنامه‌نویس‌ها را تغییر می‌دهد', meta: '۸ مهر ۱۴۰۵ · هوش مصنوعی', grad: 'from-brand to-[#1E3A8A]' },
  { title: 'راهنمای امنیت وب‌سایت برای مبتدی‌ها', meta: '۵ مهر ۱۴۰۵ · امنیت', grad: 'from-[#0E7490] to-brand2' },
]

export default function News() {
  return (
    <section id='news' className='container mx-auto px-5 py-12'>
      <h2 className={sectionTitle}>اخبار و تکنولوژی</h2>
      <p className={`${sectionSub} mb-8`}>تازه‌ترین‌ها از دنیای برنامه‌نویسی، هوش مصنوعی و ابزارهای توسعه.</p>
      <div className='grid gap-5 md:grid-cols-3'>
        {news.map((n) => (
          <a
            key={n.title}
            href='#'
            className={`${card} group overflow-hidden !p-0 transition-all duration-300 hover:border-brand hover:shadow-[0_0_20px_var(--glow)]`}
          >
            <div className={`h-36 bg-linear-to-br ${n.grad}`} />
            <div className='p-5'>
              <h3 className='font-bold leading-8 text-main'>{n.title}</h3>
              <p className='mt-2 text-xs text-muted'>{n.meta}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
