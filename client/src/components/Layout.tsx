import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`d-flex flex-column min-vh-100 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <Header />

      <main className={`flex-grow-1 py-4 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
        <div className="container">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};