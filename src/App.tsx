import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { Specialties } from './components/Specialties';
import { ContactAndMap } from './components/ContactAndMap';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentModal } from './components/AppointmentModal';
import { Footer } from './components/Footer';

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [targetArea, setTargetArea] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (areaTitle?: string) => {
    setTargetArea(areaTitle);
    setAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setAppointmentOpen(false);
    setTargetArea(undefined);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#ede8df] flex flex-col font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section matching mockup with Scales and Headlines */}
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* Credentials & Trust Bar */}
        <StatsBar />

        {/* Legal Specialties & Practice Areas */}
        <Specialties onOpenAppointment={(area) => handleOpenAppointment(area)} />

        {/* Contact Section with Integrated Map & WhatsApp Dispatch */}
        <ContactAndMap />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Consultation Scheduling Modal */}
      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={handleCloseAppointment}
        defaultArea={targetArea}
      />
    </div>
  );
}
