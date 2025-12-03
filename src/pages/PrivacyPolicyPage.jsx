import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const PrivacyPolicyPage = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="December 3, 2025"
      metaDescription="Privacy Policy for Nisarg Shah's web development services, detailing how we collect, use, and protect your personal information."
    >

      {/* Introduction */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>1. Introduction</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Welcome to Nisarg Shah's web development services ("we," "us," "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          By using our website or services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
        </p>
      </section>

      {/* Information We Collect */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>2. Information We Collect</h2>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>2.1 Personal Information</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We may collect personal information that you voluntarily provide to us when you:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Fill out contact forms on our website</li>
          <li>Request information about our services</li>
          <li>Enter into a service agreement with us</li>
          <li>Subscribe to newsletters or communications</li>
          <li>Engage with us on social media</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          This information may include: full name, email address, phone number, company name, job title, and any other information you choose to provide.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>2.2 Automatically Collected Information</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          When you visit our website, we automatically collect certain information about your device, including:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>IP address and browser type</li>
          <li>Operating system and device information</li>
          <li>Referring URLs and pages visited</li>
          <li>Date and time of visits</li>
          <li>Clickstream data and usage patterns</li>
        </ul>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>2.3 Payment Information</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          When you make a payment for our services, payment information is processed by third-party payment processors. We do not directly collect or store your complete credit card information, bank account details, or other sensitive payment data on our servers.
        </p>
      </section>

      {/* How We Use Your Information */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>3. How We Use Your Information</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We use the information we collect for various purposes, including to:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Provide, operate, and maintain our services</li>
          <li>Process your transactions and send related information</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send you technical notices, updates, and administrative messages</li>
          <li>Communicate with you about projects, services, and promotional offers</li>
          <li>Improve and personalize your experience on our website</li>
          <li>Monitor and analyze usage patterns and trends</li>
          <li>Detect, prevent, and address technical issues and security threats</li>
          <li>Comply with legal obligations and enforce our terms</li>
        </ul>
      </section>

      {/* Payment Processing */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>4. Payment Processing</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          <strong>Important:</strong> We use third-party payment processors to handle payment transactions. These processors may include, but are not limited to, Stripe, PayPal, and other secure payment gateways.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>4.1 No Credit Card Storage</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We do not store credit card information on our servers. All payment card information is transmitted directly to our payment processors through secure, encrypted connections.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>4.2 SSL Encryption</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          All payment transactions are encrypted using Secure Socket Layer (SSL) technology to protect your sensitive information during transmission.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>4.3 PCI DSS Compliance</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Our payment processors are PCI DSS (Payment Card Industry Data Security Standard) compliant, ensuring that your payment information is handled according to industry security standards.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>4.4 Third-Party Payment Processor Policies</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          When you make a payment, your information is subject to the privacy policies of our payment processors:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Stripe Privacy Policy: https://stripe.com/privacy</li>
          <li>PayPal Privacy Policy: https://www.paypal.com/privacy</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We encourage you to review these policies to understand how your payment information is processed and protected.
        </p>
      </section>

      {/* Data Sharing and Disclosure */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>5. Data Sharing and Disclosure</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We may share your information in the following circumstances:
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>5.1 Service Providers</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We may share your information with third-party service providers who perform services on our behalf, including:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Payment processors (Stripe, PayPal)</li>
          <li>Email service providers (EmailJS)</li>
          <li>Analytics providers (Google Analytics)</li>
          <li>Hosting and infrastructure providers</li>
          <li>Customer support platforms</li>
        </ul>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>5.2 Legal Requirements</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas, or government agencies).
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>5.3 Business Transfers</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>5.4 With Your Consent</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We may share your information for any other purpose with your explicit consent.
        </p>
      </section>

      {/* Data Security */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>6. Data Security</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>SSL/TLS encryption for data transmission</li>
          <li>Secure server infrastructure and hosting</li>
          <li>Regular security updates and patches</li>
          <li>Access controls and authentication mechanisms</li>
          <li>Regular security audits and monitoring</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
        </p>
      </section>

      {/* Third-Party Services */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>7. Third-Party Services</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Our website and services may integrate with or contain links to third-party services, including:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li><strong>Google Analytics:</strong> For website analytics and usage tracking</li>
          <li><strong>EmailJS:</strong> For processing contact form submissions</li>
          <li><strong>Payment Processors:</strong> For secure payment processing</li>
          <li><strong>Social Media Platforms:</strong> For social sharing and integration</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          These third-party services have their own privacy policies. We are not responsible for the privacy practices of these services and encourage you to review their policies.
        </p>
      </section>

      {/* Cookies and Tracking */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>8. Cookies and Tracking Technologies</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We use cookies and similar tracking technologies to collect and track information about your browsing activities. Cookies are small data files stored on your device.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>8.1 Types of Cookies We Use</h3>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li><strong>Essential Cookies:</strong> Required for website functionality</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
          <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
        </ul>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>8.2 Managing Cookies</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          You can control and manage cookies through your browser settings. You can delete or block cookies, but this may affect your experience on our website. To opt out of Google Analytics tracking, visit: https://tools.google.com/dlpage/gaoptout
        </p>
      </section>

      {/* Your Rights */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>9. Your Privacy Rights</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Depending on your location, you may have certain rights regarding your personal information:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
          <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information</li>
          <li><strong>Restriction:</strong> Request restriction of processing of your information</li>
          <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
          <li><strong>Objection:</strong> Object to our processing of your personal information</li>
          <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          To exercise any of these rights, please contact us at shah.nisarg39@gmail.com. We will respond to your request within 30 days.
        </p>
      </section>

      {/* Data Retention */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>10. Data Retention</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Factors affecting retention periods include:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Duration of our business relationship</li>
          <li>Legal and regulatory requirements</li>
          <li>Tax and accounting obligations</li>
          <li>Dispute resolution and legal claims</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          When your information is no longer needed, we will securely delete or anonymize it.
        </p>
      </section>

      {/* International Users */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>11. International Data Transfers</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from your jurisdiction.
        </p>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          If you are located in the European Economic Area (EEA), we comply with GDPR requirements for international data transfers and ensure appropriate safeguards are in place.
        </p>
      </section>

      {/* Children's Privacy */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>12. Children's Privacy</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from children without parental consent, we will take steps to delete that information.
        </p>
      </section>

      {/* Changes to Privacy Policy */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>13. Changes to This Privacy Policy</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We reserve the right to update or modify this Privacy Policy at any time. When we make changes, we will update the "Last Updated" date at the top of this page. Material changes will be communicated through:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Email notification to registered users</li>
          <li>Prominent notice on our website</li>
          <li>In-app notifications (if applicable)</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We encourage you to review this Privacy Policy periodically. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>14. Contact Us</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
        </p>
        <div className='ml-6 text-white-100 mb-4'>
          <p className='mb-2'><strong>Nisarg Shah</strong></p>
          <p className='mb-2'>MERN Stack Developer</p>
          <p className='mb-2'>Email: <a href="mailto:shah.nisarg39@gmail.com" className='text-secondary hover:text-white transition-colors'>shah.nisarg39@gmail.com</a></p>
          <p className='mb-2'>Website: <a href="/" className='text-secondary hover:text-white transition-colors'>Portfolio Contact Form</a></p>
        </div>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We will respond to all requests within a reasonable timeframe.
        </p>
      </section>

    </LegalPageLayout>
  );
}

export default PrivacyPolicyPage;
