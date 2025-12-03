import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';

const LegalPageLayout = ({ title, lastUpdated, children, metaDescription }) => {

  useEffect(() => {
    // Set page title
    document.title = `${title} | Nisarg Shah`;

    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && metaDescription) {
      metaDesc.content = metaDescription;
    }

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [title, metaDescription]);

  return (
    <div className='bg-primary min-h-screen text-white'>
      <div className={`${styles.paddingX} py-20 max-w-4xl mx-auto`}>

        {/* Back Navigation */}
        <Link
          to="/"
          className='inline-flex items-center gap-2 text-secondary hover:text-white transition-colors duration-200 mb-8 no-print'
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        {/* Page Title */}
        <h1 className={`${styles.sectionHeadText} mb-6`}>
          {title}
        </h1>

        {/* Last Updated */}
        <p className='text-secondary text-sm mb-8'>
          Last Updated: {lastUpdated}
        </p>

        {/* Content */}
        <div className='legal-content space-y-6 text-white-100 leading-relaxed'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default LegalPageLayout;
