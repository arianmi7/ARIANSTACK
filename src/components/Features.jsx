import { btn, btnPrimary, card, tag, sectionTitle, sectionSub } from '../ui'

const roadmap = [
  { name: 'HTML و CSS', value: 100 },
  { name: 'جاوااسکریپت', value: 85 },
  { name: 'React', value: 55 },
  { name: 'Node.js', value: 20 },
  { name: 'دیتابیس', value: 0 },
]

const projects = [
  { title: 'طراحی سایت فروشگاهی', tech: 'Next.js', price: '۱۸٬۰۰۰٬۰۰۰', bids: '۱۲' },
  { title: 'پنل مدیریت کلینیک', tech: 'React', price: '۲۵٬۰۰۰٬۰۰۰', bids: '۷' },
  { title: 'اپلیکیشن رزرو آنلاین', tech: 'Flutter', price: '۳۲٬۰۰۰٬۰۰۰', bids: '۱۹' },
]

const crm = [
  { title: 'جدید', items: ['شرکت پارس', 'فروشگاه نیلو'], done: false },
  { title: 'مذاکره', items: ['کلینیک آریا'], done: false },
  { title: 'بسته شد', items: ['استودیو مهر'], done: true },
]

const code = `const useDebounce = (value, delay) => {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value]);
  return v;
};`

function CardHead({ title, sub }) {
  return (
    <>
      <h3 className='text-xl font-bold text-main'>{title}</h3>
      <p className='mt-1 mb-5 text-sm text-muted'>{sub}</p>
    </>
  )
}

function Roadmap() {
  return (
    <div className={card}>
      <CardHead title='رودمپ برنامه‌نویسی و طراحی سایت' sub='مسیر فرانت‌اند، با پیشرفت ذخیره‌شده برای هر کاربر' />
      <div className='space-y-4'>
        {roadmap.map((r) => (
          <div key={r.name} className='grid grid-cols-[96px_1fr_44px] items-center gap-3 text-sm'>
            <span className='text-main'>{r.name}</span>
            <div className='h-2 rounded-full bg-soft overflow-hidden'>
              <div
                className='h-full rounded-full bg-linear-to-l from-brand to-brand2'
                style={{ width: `${r.value}%` }}
              />
            </div>
            <span className='text-muted text-xs'>{r.value.toLocaleString('fa-IR')}٪</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Market() {
  return (
    <div className={card}>
      <CardHead title='بازار پروژه' sub='کارفرما پروژه ثبت می‌کند، برنامه‌نویس‌ها پیشنهاد می‌دهند' />
      <ul>
        {projects.map((p) => (
          <li
            key={p.title}
            className='flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-line py-4 text-sm'
          >
            <span className='font-semibold text-main'>{p.title}</span>
            <span className={tag}>{p.tech}</span>
            <span className='font-semibold text-brand'>{p.price} تومان</span>
            <span className='text-xs text-muted'>{p.bids} پیشنهاد</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Resume() {
  return (
    <div className={card}>
      <CardHead title='رزومه‌ساز' sub='قالب آماده، خروجی PDF و لینک عمومی' />
      <div className='rounded-2xl border border-line bg-soft p-5 text-center'>
        <div className='mx-auto size-14 rounded-full bg-linear-to-br from-brand2 to-brand' />
        <b className='mt-2 block text-main'>آرین میرکی</b>
        <span className='text-xs text-brand'>توسعه‌دهنده فرانت‌اند</span>
        <div className='my-3 flex flex-wrap justify-center gap-2'>
          {['React', 'TypeScript', 'Tailwind'].map((t) => (
            <span key={t} className={tag}>{t}</span>
          ))}
        </div>
        <div className='mx-auto my-3 h-2 w-3/4 rounded-full bg-line' />
        <div className='mx-auto my-3 h-2 w-1/2 rounded-full bg-line' />
        <div className='mx-auto my-3 h-2 w-2/3 rounded-full bg-line' />
      </div>
      <div className='mt-4 flex gap-3'>
        <button className={`${btnPrimary} flex-1`}>دانلود PDF</button>
        <button className={`${btn} flex-1`}>کپی لینک</button>
      </div>
    </div>
  )
}

function CodeShare() {
  return (
    <div className={card}>
      <CardHead title='اشتراک کد' sub='کد را بفرست، لایک و نظر بگیر' />
      <pre
        dir='ltr'
        className='overflow-x-auto rounded-2xl bg-code p-5 text-left text-[13px] leading-7 text-codetext'
      >
        <code>{code}</code>
      </pre>
      <p className='mt-4 text-xs text-muted'>۱۲۸ لایک · ۲۴ نظر · React Hooks</p>
    </div>
  )
}

function Crm() {
  return (
    <div className={card}>
      <CardHead title='CRM' sub='مشتری‌ها و مراحل فروش' />
      <div className='grid grid-cols-3 gap-2'>
        {crm.map((col) => (
          <div key={col.title} className='min-h-40 rounded-2xl bg-soft p-2 text-xs text-muted'>
            <div className='px-1 pb-1'>{col.title}</div>
            {col.items.map((i) => (
              <div
                key={i}
                className={`mt-2 rounded-lg border border-line border-s-[3px] bg-card px-2 py-2 text-main ${
                  col.done ? 'border-s-emerald-500' : 'border-s-brand'
                }`}
              >
                {i}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id='features' className='container mx-auto px-5 py-12'>
      <h2 className={sectionTitle}>یک پلتفرم، همه ابزارهای یک برنامه‌نویس.</h2>
      <p className={`${sectionSub} mb-8`}>از اولین درس تا آخرین فاکتور، همه‌چیز توی یک حساب کاربری.</p>

      <div className='grid gap-5 lg:grid-cols-[1.6fr_1fr]'>
        <div className='grid gap-5'>
          <Roadmap />
          <Market />
        </div>
        <Resume />
      </div>

      <div className='mt-5 grid gap-5 lg:grid-cols-[1fr_1.6fr]'>
        <Crm />
        <CodeShare />
      </div>
    </section>
  )
}
