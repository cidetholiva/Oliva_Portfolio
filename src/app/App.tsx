import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { UIUXPage } from './pages/UIUXPage';
import { ImmersiveWorksPage } from './pages/ImmersiveWorksPage';
import { GraphicDesignPage } from './pages/GraphicDesignPage';
import { CreativeCodingPage } from './pages/CreativeCodingPage';
import { P5jsPage } from './pages/P5jsPage';
import { AnimationPage } from './pages/AnimationPage';
import { VisualArtPage } from './pages/VisualArtPage';
import { ProjectConvers8 } from './pages/ProjectConvers8';
import { ProjectTrustFund } from './pages/ProjectTrustFund';
import { ProjectTouchdownTravels } from './pages/ProjectTouchdownTravels';
import { ProjectiConsultancy } from './pages/ProjectiConsultancy';
import { ProjectMajorDecisions } from './pages/ProjectMajorDecisions';
import { ProjectVRMeditation } from './pages/ProjectVRMeditation';
import { ProjectARCityExplorer } from './pages/ProjectARCityExplorer';
import { ProjectDreamscape } from './pages/ProjectDreamscape';
import { ProjectLightMotion } from './pages/ProjectLightMotion';
import { ProjectSnapLens } from './pages/ProjectSnapLens';
import { ProjectStampStudentUnion } from './pages/ProjectStampStudentUnion';
import { ProjectServpro } from './pages/ProjectServpro';
import { DataAnalyticsPage } from './pages/DataAnalyticsPage';
import { BeatsDataPage } from './pages/BeatsDataPage';
import { AcademicDataPage } from './pages/AcademicDataPage';
import { ComingSoonPage } from './pages/ComingSoonPage';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/8364bb76-134a-4a86-af12-e41af70a6e1e_rw_600.png?h=4c0043d0f25e8e49b70bf23da884773e';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleShowResume = () => {
    setShowResume(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors duration-300">
        {/* Background Decorative Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Blurred Gradient Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-rose-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-gradient-to-br from-orange-300/20 to-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onShowResume={handleShowResume} />
          <ScrollToTop />
          
          <Routes>
            <Route path="/" element={<HomePage showResume={showResume} setShowResume={setShowResume} />} />
            <Route path="/ui-ux" element={<UIUXPage />} />
            <Route path="/immersive-works" element={<ImmersiveWorksPage />} />
            <Route path="/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/creative-coding" element={<CreativeCodingPage />} />
            <Route path="/creative-coding/p5js" element={<P5jsPage />} />
            <Route path="/creative-coding/animation" element={<AnimationPage />} />
            <Route path="/creative-coding/visual-art" element={<VisualArtPage />} />
            <Route path="/project/convers8" element={<ProjectConvers8 />} />
            <Route path="/project/trustfund" element={<ProjectTrustFund />} />
            <Route path="/project/touchdowntravels" element={<ProjectTouchdownTravels />} />
            <Route path="/project/iconsultancy" element={<ProjectiConsultancy />} />
            <Route path="/project/majordecisions" element={<ProjectMajorDecisions />} />
            <Route path="/project/vrmeditation" element={<ProjectVRMeditation />} />
            <Route path="/project/arcityexplorer" element={<ProjectARCityExplorer />} />
            <Route path="/project/dreamscape" element={<ProjectDreamscape />} />
            <Route path="/project/lightmotion" element={<ProjectLightMotion />} />
            <Route path="/project/snaplens" element={<ProjectSnapLens />} />
            <Route path="/project/stampstudentunion" element={<ProjectStampStudentUnion />} />
            <Route path="/project/servpro" element={<ProjectServpro />} />
            <Route path="/data-analytics" element={<DataAnalyticsPage />} />
            <Route path="/data-analytics/beats" element={<BeatsDataPage />} />
            <Route path="/data-analytics/academic" element={<AcademicDataPage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}