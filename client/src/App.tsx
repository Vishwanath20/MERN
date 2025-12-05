import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import './index.css';

export default function App() {
  const [theme, setTheme] = useState<'light'|'dark'>('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme === 'dark' ? 'dark' : ''} transition-colors duration-500`}>
        <Layout>
          <HomePage />
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
}
