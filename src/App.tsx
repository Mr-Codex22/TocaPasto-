import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhyParticipate from './components/WhyParticipate';
import FeaturedActivities from './components/FeaturedActivities';
import UpcomingEvents from './components/UpcomingEvents';
import ImpactStats from './components/ImpactStats';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhyParticipate />
        <FeaturedActivities />
        <UpcomingEvents />
        <ImpactStats />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
