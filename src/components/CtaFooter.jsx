const cols = [
  { title: 'پلتفرم', links: ['رودمپ', 'رزومه‌ساز', 'پروژه‌ها', 'اشتراک کد'] },
  { title: 'آرین‌استک', links: ['درباره ما', 'چرا آرین‌استک', 'اخبار', 'تماس'] },
  { title: 'پشتیبانی', links: ['تیکت', 'سؤالات متداول', 'قوانین', 'حریم خصوصی'] },
]

export function Cta() {
  return (
    <section className='container mx-auto px-5 py-10'>
      <div className='flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-linear-to-r from-brand2 to-brand p-8 md:p-12'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-white'>امروز اولین قدمت را بردار.</h2>
        <button className='h-12 cursor-pointer rounded-xl bg-[#0F1B33] px-8 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]'>
          ثبت‌نام رایگان
        </button>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className='mt-12 border-t border-line py-12'>
      <div className='container mx-auto flex flex-wrap justify-between gap-10 px-5'>
        <div>
          <img src='/arianstack-icon.PNG' alt='ArianStack' className='h-12 dark:hidden' />
          <img src='/arianstack-icon.PNG' alt='ArianStack' className='hidden h-12 dark:block' />
          <p className='mt-3 text-sm text-muted' dir='ltr'>Tech / Software / IT Solutions</p>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className='mb-3 font-bold text-main'>{c.title}</h4>
            <ul className='space-y-2 text-sm text-muted'>
              {c.links.map((l) => (
                <li key={l}>
                  <a href='#' className='transition-colors hover:text-brand'>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
