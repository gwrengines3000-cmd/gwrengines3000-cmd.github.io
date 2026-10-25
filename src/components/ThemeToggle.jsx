import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.jsx';

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('ThemeToggle must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;