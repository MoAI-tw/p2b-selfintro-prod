import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { GeneratorProvider } from './contexts/GeneratorContext';

// Pages
import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import InputData from './pages/InputData';
import UploadFiles from './pages/UploadFiles';
import Generator from './pages/Generator';
import GenerationSettings from './pages/GenerationSettings';
import Result from './pages/Result';
import AdjustContent from './pages/AdjustContent';
import NotFound from './pages/NotFound';
import TestPage from './pages/TestPage';

// Add FontAwesome icons to library
library.add(fas, fab);

function App() {
  return (
    <GeneratorProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/input-data" element={<InputData />} />
          <Route path="/upload-files" element={<UploadFiles />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/generation-settings" element={<GenerationSettings />} />
          <Route path="/result" element={<Result />} />
          <Route path="/adjust-content" element={<AdjustContent />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </GeneratorProvider>
  );
}

export default App;
