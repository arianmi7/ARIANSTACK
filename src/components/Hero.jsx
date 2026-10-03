import { btn, btnPrimary, btnLg } from '../ui'

function Layers() {
  return (
    <svg viewBox='0 0 420 340' fill='none' aria-hidden='true' className='w-full h-full'>
      <defs>
        <linearGradient id='la' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stopColor='#38BDF8' stopOpacity='.55' />
          <stop offset='1' stopColor='#2563EB' stopOpacity='.55' />
        </linearGradient>
        <linearGradient id='lb' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stopColor='#38BDF8' stopOpacity='.28' />
          <stop offset='1' stopColor='#2563EB' stopOpacity='.28' />
        </linearGradient>
      </defs>
      <path d='M210 230 L380 190 L210 290 L40 190 Z' fill='url(#lb)' stroke='#2563EB' strokeOpacity='.5' />
      <path d='M210 170 L380 130 L210 230 L40 130 Z' fill='url(#lb)' stroke='#2563EB' strokeOpacity='.5' />
      <path d='M210 100 L380 60 L210 160 L40 60 Z' fill='url(#la)' stroke='#2563EB' strokeOpacity='.7' />
      <path d='M150 70 L260 45' stroke='#fff' strokeWidth='6' strokeLinecap='round' opacity='.9' />
      <path d='M170 82 L230 66' stroke='#fff' strokeWidth='4' strokeLinecap='round' opacity='.6' />
    </svg>
  )
}

const labels = [
  { title: 'درآمد', text: 'پروژه بگیر و پرداخت امن' },
  { title: 'رزومه', text: 'پروفایل حرفه‌ای بساز' },
  { title: 'یادگیری', text: 'رودمپ قدم‌به‌قدم' },
]

export default function Hero() {
  return (
    <div id='home' className='bg-[radial-gradient(900px_420px_at_20%_30%,var(--hero-glow),transparent_70%)]'>
      <div className='container mx-auto px-5 py-14 grid gap-10 lg:grid-cols-2 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl font-extrabold leading-[1.6] text-main'>
            از یادگیری کد تا گرفتن پروژه، در یک مسیر.
          </h2>
          <p className='mt-5 max-w-lg text-muted leading-8'>
            رودمپ برنامه‌نویسی را قدم‌به‌قدم برو، رزومه‌ات را بساز، پروژه بگیر و کدهایت را با بقیه به اشتراک بگذار.
          </p>
          <div className='mt-7 flex flex-wrap gap-3'>
            <button className={`${btnPrimary} ${btnLg}`}>شروع رایگان</button>
            <button className={`${btn} ${btnLg}`}>دیدن رودمپ‌ها</button>
          </div>
          <ul className='mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted'>
            {['رودمپ به‌روز', 'پرداخت امن پروژه', 'پشتیبانی واقعی'].map((t) => (
              <li key={t} className='flex items-center gap-2'>
                <span className='size-2 rounded-full bg-emerald-500' />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-stretch gap-4 h-72 md:h-80'>
          <div className='flex flex-col justify-between py-4 text-sm text-muted w-2/5'>
            {labels.map((l) => (
              <div key={l.title}>
                <b className='block text-main'>{l.title}</b>
                {l.text}
              </div>
            ))}
          </div>
          <div className='w-3/5'>
            <Layers />
          </div>
        </div>
      </div>
    </div>
  )
}
