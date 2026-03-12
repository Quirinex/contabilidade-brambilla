import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { HowWeWork } from './components/HowWeWork';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        <Industries />
        <FAQ />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
