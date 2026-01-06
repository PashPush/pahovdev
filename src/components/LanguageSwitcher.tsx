import { useTranslation } from 'react-i18next';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

const languages = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);
    timeoutRef.current = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="lang-switcher">
      {languages.map(({ code, label }) => (
        <button key={code} onClick={() => handleChange(code)} className={i18n.language === code ? 'active' : ''}>
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
