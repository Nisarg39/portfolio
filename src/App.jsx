import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleAnalytics } from './components';
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';

// Service Specific Pages
import AiSolutionsPage from './pages/services/AiSolutionsPage';
import CustomSoftwarePage from './pages/services/CustomSoftwarePage';
import MvpDevelopmentPage from './pages/services/MvpDevelopmentPage';
import WebsiteDevelopmentPage from './pages/services/WebsiteDevelopmentPage';
import AppDevelopmentPage from './pages/services/AppDevelopmentPage';

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <GoogleAnalytics />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />

            {/* Main Navigation Routes */}
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="work" element={<WorkPage />} />
            <Route path="contact" element={<ContactPage />} />

            {/* Specific Service Routes */}
            <Route path="services/ai-solutions" element={<AiSolutionsPage />} />
            <Route path="services/custom-software" element={<CustomSoftwarePage />} />
            <Route path="services/mvp-development" element={<MvpDevelopmentPage />} />
            <Route path="services/website-development" element={<WebsiteDevelopmentPage />} />
            <Route path="services/app-development" element={<AppDevelopmentPage />} />

            {/* Legal Routes */}
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-conditions" element={<TermsConditionsPage />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
