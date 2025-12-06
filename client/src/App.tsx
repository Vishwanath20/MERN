import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import MernOperation from './pages/MernOperation';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
             <Route path="/mern" element={<MernOperation />} />
            {/* Add more routes here */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;