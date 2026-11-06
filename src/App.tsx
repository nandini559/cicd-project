import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ExpertisePage } from './pages/ExpertisePage';
import { SectorsPage } from './pages/SectorsPage';
import { SectorDetailPage } from './pages/SectorDetailPage';
import { TeamPage } from './pages/TeamPage';
import { JobsPage } from './pages/JobsPage';
import { InsightsPage } from './pages/InsightsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { RegisterVacancyPage } from './pages/RegisterVacancyPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 antialiased font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/sectors/:slug" element={<SectorDetailPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register-vacancy" element={<RegisterVacancyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
