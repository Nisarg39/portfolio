import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styles } from '../styles';
import { quickLinks, legalLinks, socialLinks } from '../constants/footerLinks';
import { logo } from '../assets';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleHashClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <footer className='bg-primary mt-auto'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto py-12`}>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>

          {/* Column 1: Branding */}
          <div className='space-y-4'>
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={logo}
                alt="Nisarg Shah Logo"
                className="w-8 h-8 object-contain"
              />
              <p className="text-white text-lg font-bold">
                NashTech Solutions
              </p>
            </Link>
            <p className='text-secondary text-sm leading-relaxed max-w-xs'>
              Specialized Digital Agency engineering scalable digital infrastructure, custom AI solutions, and high-performance SaaS platforms.
            </p>
          </div>

          {/* Column 2: Quick Links (only on home page) */}
          {isHomePage && (
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-white'>Quick Links</h3>
              <ul className='space-y-3'>
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleHashClick(link.id);
                      }}
                      className='text-sm text-secondary hover:text-white transition-colors duration-200 cursor-pointer'
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Column 3: Legal & Social */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>Legal</h3>
            <ul className='space-y-3'>
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className='text-sm text-secondary hover:text-white transition-colors duration-200'
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className='pt-4'>
              <h3 className='text-lg font-semibold text-white mb-3'>Connect</h3>
              <div className='flex gap-4'>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : '_self'}
                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    aria-label={social.ariaLabel}
                    className='text-secondary hover:text-white transition-colors duration-200'
                  >
                    {social.name === 'Email' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {social.name === 'LinkedIn' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {social.name === 'GitHub' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className='mt-12 pt-8 border-t border-secondary/20 text-center'>
          <p className='text-xs text-secondary/60'>
            &copy; {new Date().getFullYear()} NashTech Solutions by Nisarg Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
