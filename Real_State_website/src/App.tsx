import { AppProvider, useApp } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import EnquiryModal from '@/components/EnquiryModal';
import HeroSlider from '@/components/HeroSlider';
import PropertySearch from '@/components/PropertySearch';
import WhyInvest from '@/components/WhyInvest';
import FeaturedProjects from '@/components/FeaturedProjects';
import PrimeLocations from '@/components/PrimeLocations';
import WhatWeOffer from '@/components/WhatWeOffer';
import VirtualTour from '@/components/VirtualTour';
import DevelopmentPartners from '@/components/DevelopmentPartners';
import Testimonials from '@/components/Testimonials';
import ExploreMore from '@/components/ExploreMore';
import RealEstateInsights from '@/components/RealEstateInsights';
import CTASection from '@/components/CTASection';
import AboutSection from '@/components/AboutSection';
import ProjectsPage from '@/pages/ProjectsPage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import ContactPage from '@/pages/ContactPage';

function HomePage() {
  return (
    <>
      <HeroSlider />
      <PropertySearch />
      <WhyInvest />
      <FeaturedProjects />
      <PrimeLocations />
      <WhatWeOffer />
      <VirtualTour />
      <DevelopmentPartners />
      <Testimonials />
      <AboutSection />
      <ExploreMore />
      <RealEstateInsights />
      <CTASection />
    </>
  );
}

function PageRouter() {
  const { page, projectId } = useApp();

  if (page === 'projects' && projectId) {
    return <ProjectDetailPage />;
  }
  if (page === 'projects') {
    return <ProjectsPage />;
  }
  if (page === 'contact') {
    return <ContactPage />;
  }
  return <HomePage />;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageRouter />
      </main>
      <Footer />
      <FloatingButtons />
      <EnquiryModal />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
