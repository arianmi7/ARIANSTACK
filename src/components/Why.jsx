import { card, tag, sectionTitle } from '../ui'

const reasons = [
  { title: 'همه‌چیز در یک حساب', text: 'رودمپ، رزومه، پروژه و CRM بدون جابه‌جایی بین چند سایت.' },
  { title: 'پرداخت امن پروژه', text: 'پول پروژه نزد پلتفرم می‌ماند تا کار تحویل و تأیید شود.' },
  { title: 'رودمپ‌های به‌روز', text: 'مسیرها با نیاز واقعی بازار کار هماهنگ و مرتب بازبینی می‌شوند.' },
  { title: 'تیم واقعی پشت سایت', text: 'آرین‌استک خودش سایت و نرم‌افزار می‌سازد و مشکلات را از نزدیک می‌شناسد.' },
]

export default function Why() {
  return (
    <>
      <section className='container mx-auto px-5 py-12'>
        <h2 className={`${sectionTitle} mb-8`}>چرا آرین‌استک؟</h2>
        <div className='grid gap-x-10 gap-y-8 md:grid-cols-2'>
          {reasons.map((r) => (
            <div key={r.title} className='border-s-[3px] border-brand ps-5'>
              <h3 className='text-lg font-bold text-main'>{r.title}</h3>
              <p className='mt-1 text-sm leading-7 text-muted'>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id='support' className='container mx-auto px-5 py-6'>
        <div className={`${card} flex flex-wrap items-center justify-between gap-6 !p-8`}>
          <div>
            <h3 className='text-2xl font-extrabold text-main'>پشتیبانی همیشه کنار شماست</h3>
            <p className='mt-1 text-sm text-muted'>سؤالی داری یا به مشکل خوردی؟ از هر راهی که راحتی پیام بده.</p>
          </div>
          <div className='flex flex-wrap gap-2'>
            {['ثبت تیکت', 'چت آنلاین', 'سؤالات متداول'].map((t) => (
              <a key={t} href='#' className={`${tag} !px-4 !py-1.5 transition-all hover:border-brand hover:shadow-[0_0_12px_var(--glow)]`}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
