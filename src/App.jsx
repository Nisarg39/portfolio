import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleAnalytics } from './components';
import SharedLayout from './layouts/SharedLayout';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';

const App = () => {
  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-conditions" element={<TermsConditionsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

