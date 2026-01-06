import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { navLinks } from '../constants';
import { classNames } from '../lib/classNames';
import LanguageSwitcher from './LanguageSwitcher';

const NavBar = () => {
  const { t } = useTranslation();
  const [currentLink, setCurrentLink] = useState('#hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(({ link }) => document.querySelector(link));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visibleSection = entries.find(entry => entry.isIntersecting);
        if (visibleSection) {
          setCurrentLink(`#${visibleSection.target.id}`);
        }
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach(section => section && observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const lettersClass = classNames('', {
    'text-cyan-200': currentLink === '#projects',
    'text-green-200': currentLink === '#experience',
    'text-violet-200': currentLink === '#approach',
    'text-orange-200': currentLink === '#reviews',
    'text-teal-200': currentLink === '#skills',
    'text-blue-300': currentLink === '#contact',
  });

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a href="#" onClick={scrollToTop} className="logo">
          <span className={lettersClass}>Pa</span>vel K<span className={lettersClass}>hov</span>alkin
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.slice(1, 6).map(({ link, key }) => (
              <li key={key} className="group">
                <a href={link}>
                  <span>{t(`nav.${key}`)}</span>
                  <span className={classNames('underline', { active: link === currentLink })} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSwitcher />

        <a href="#contact" className="contact-btn group">
          <div className={classNames('inner', { active: currentLink === '#contact' })}>
            <span>{t('nav.contactBtn')}</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
