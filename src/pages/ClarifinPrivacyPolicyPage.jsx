import LegalPageLayout from '../components/LegalPageLayout';

const ClarifinPrivacyPolicyPage = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy for Clarifin"
      lastUpdated="May 28, 2026"
      metaDescription="Privacy Policy for Clarifin, detailing how we collect, use, and protect your personal information on our mobile application."
    >
      <p className='text-base leading-relaxed text-white-100 mb-6'>
        This Privacy Policy describes how <strong>Clarifin</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;the App&quot;) collects, uses, and shares your personal information when you use our mobile application.
      </p>

      {/* 1. Information We Collect */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>1. Information We Collect</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We only collect and process the information necessary to provide the features of Clarifin, which includes:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>
            <strong>Account Information:</strong> If you register an account, we collect your email address and authentication credentials.
          </li>
          <li>
            <strong>Usage Data:</strong> We may process information regarding your investment preferences, age range, and interactions within the app to personalize your investment guidance.
          </li>
        </ul>
      </section>

      {/* 2. How We Use Your Information */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>2. How We Use Your Information</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We use the collected data to:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Provide, operate, and maintain the App&apos;s core services.</li>
          <li>Personalize your experience based on your financial goals.</li>
          <li>Improve and optimize the App&apos;s user interface and performance.</li>
        </ul>
      </section>

      {/* 3. Data Transfer and Encryption */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>3. Data Transfer and Encryption</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Your privacy is important to us. All data transmitted between the App and our backend servers is encrypted in transit using Secure Socket Layer/Transport Layer Security (SSL/TLS) protocols.
        </p>
      </section>

      {/* 4. Third-Party Services and Sharing */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>4. Third-Party Services and Sharing</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We do not sell, rent, or trade your personal information with third parties. Your data is only shared with database and hosting providers essential for the operation of the App.
        </p>
      </section>

      {/* 5. Security */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>5. Security</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We implement appropriate technical and organizational measures to secure your personal data. However, please remember that no method of transmission over the internet or electronic storage is 100% secure.
        </p>
      </section>

      {/* 6. Your Rights */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>6. Your Rights</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          You have the right to request access to, correction of, or deletion of your personal data. You can delete your account and personal data at any time from within the App settings or by contacting us.
        </p>
      </section>

      {/* 7. Contact Us */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>7. Contact Us</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          If you have any questions or suggestions about this Privacy Policy, please contact us at:{' '}
          <a href="mailto:shah.nisarg39@gmail.com" className='text-secondary hover:text-white transition-colors'>
            shah.nisarg39@gmail.com
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default ClarifinPrivacyPolicyPage;
