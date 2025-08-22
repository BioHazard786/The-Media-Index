/** biome-ignore-all lint/a11y/noNoninteractiveElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */

import './theme-switcher.css';
import { useTheme } from 'next-themes';
import { FaAdjust } from 'react-icons/fa';

function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <div className="theme-preview-wrapper">
      <div className="theme-title-wrapper">
        <FaAdjust className="theme-toggle-icon" />
        <div className="theme-title">Theme</div>
      </div>
      <div className="theme-button-wrapper">
        <div className="theme-preview light" onClick={() => setTheme('light')}>
          A
        </div>
        <div className="theme-preview dark" onClick={() => setTheme('dark')}>
          A
        </div>
        <div
          className="theme-preview contrast"
          onClick={() => setTheme('contrast')}
        >
          A
        </div>
        <div
          className="theme-preview system"
          onClick={() => setTheme('system')}
        >
          A
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
