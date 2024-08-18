import './App.css';
import LandingPage from './component/page/landing-page/landing-page.component';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import RegistrationPage from './component/page/registration-page/registration-page';
import PrivacyPolicyComponent from './component/page/privacy-policy/privacy-policy';
import TermsAndConditionsComponent from './component/page/terms-and-condtion/terms-and-condtion';
import PaymentSuccess from './component/page/payment-success/payment-success';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/register-for-session" element={<RegistrationPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyComponent />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsComponent />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <LandingPage />
    // </div>
  );
}

export default App;
