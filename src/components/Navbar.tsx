import { useState, useEffect } from 'react';

import { navLinks } from '../constants';
import { classNames } from '../lib/classNames';

const NavBar = () => {
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

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className="logo" tabIndex={1}>
          Pavel Hovalkin
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.slice(1, 5).map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link} tabIndex={1}>
                  <span>{name}</span>
                  <span className={classNames('underline', { active: link === currentLink })} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group" tabIndex={1}>
          <div className={classNames('inner', { active: currentLink === '#contact' })}>
            <span>Контакты</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
