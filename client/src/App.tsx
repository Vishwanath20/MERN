import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import MernOperation from './pages/MernOperation';
import IntelliHireHome from './intellihire/pages/IntelliHireHome';
import ResumeUploadPage from './intellihire/pages/ResumeUploadPage';
import ResumeAnalysisPage from './intellihire/pages/ResumeAnalysisPage';
import MockInterviewPage from './intellihire/pages/MockInterviewPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mern" element={<MernOperation />} />

              {/* IntelliHire routes */}
            <Route path="/intellihire" element={<IntelliHireHome />} />
            <Route path="/intellihire/resume-upload" element={<ResumeUploadPage />} />
            <Route path="/intellihire/resume/:id" element={<ResumeAnalysisPage />} />
            <Route path="/intellihire/mock-interview" element={<MockInterviewPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;