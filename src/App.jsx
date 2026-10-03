import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import News from './components/News'
import Why from './components/Why'
import { Cta, Footer } from './components/CtaFooter'

function App() {
  return (
    <div className='min-h-screen bg-page text-main transition-colors duration-300'>
      <Header />
      <main>
        <Hero />
        <Features />
        <News />
        <Why />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}

export default App
