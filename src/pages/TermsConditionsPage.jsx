import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const TermsConditionsPage = () => {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      lastUpdated="December 3, 2025"
      metaDescription="Terms and Conditions for Nisarg Shah's web development services, including payment terms, refund policy, and service agreements."
    >

      {/* Acceptance of Terms */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>1. Acceptance of Terms</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          By accessing or using the services provided by Nisarg Shah ("we," "us," "our"), you agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you (the "Client") and Nisarg Shah.
        </p>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          If you do not agree to these terms, you must not use our services. We reserve the right to refuse service to anyone for any reason at any time.
        </p>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          You must be at least 18 years of age to use our services. By using our services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into this agreement.
        </p>
      </section>

      {/* Services Description */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>2. Services Description</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We provide professional web development and software engineering services, including but not limited to:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li><strong>Web Development:</strong> Full-stack web application development using MERN stack (MongoDB, Express.js, React, Node.js), Next.js, and related technologies</li>
          <li><strong>Java Development:</strong> Backend services and enterprise application development using Java and Spring framework</li>
          <li><strong>API Services:</strong> RESTful API design, development, and integration</li>
          <li><strong>Hosting Services:</strong> Website deployment, server configuration, and hosting setup</li>
          <li><strong>Mobile Development:</strong> Cross-platform mobile applications using React Native</li>
          <li><strong>Consulting Services:</strong> Technical consultation, code review, and architecture planning</li>
          <li><strong>Maintenance and Support:</strong> Ongoing website maintenance, updates, and technical support</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Specific services, deliverables, timelines, and costs will be outlined in a separate project agreement or proposal.
        </p>
      </section>

      {/* Payment Terms */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>3. Payment Terms</h2>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>3.1 Pricing and Fees</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Our services are priced on a project-based or hourly basis, as agreed upon in the project proposal:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li><strong>Project-Based Pricing:</strong> Fixed fee for defined scope of work with milestone-based payments</li>
          <li><strong>Hourly Rate:</strong> Time-based billing for ongoing work, consulting, or maintenance</li>
          <li><strong>Retainer Agreements:</strong> Monthly retainer for ongoing support and services</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          All prices are quoted in USD unless otherwise specified. Prices do not include applicable taxes, which will be added to invoices as required by law.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>3.2 Payment Methods</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We accept the following payment methods:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Credit and debit cards (via Stripe)</li>
          <li>PayPal</li>
          <li>Bank transfer / Wire transfer</li>
          <li>Other methods as mutually agreed upon</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Payment processing fees may apply for certain payment methods and will be communicated in advance.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>3.3 Billing and Invoicing</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          For project-based work, invoices are typically issued according to project milestones:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li><strong>Deposit:</strong> 30-50% upfront deposit required before work commences</li>
          <li><strong>Milestone Payments:</strong> Progress payments at agreed milestones</li>
          <li><strong>Final Payment:</strong> Balance due upon project completion before final delivery</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          For hourly work, invoices are issued weekly, bi-weekly, or monthly as agreed. Payment is due within 7 days of invoice date unless otherwise specified.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>3.4 Late Payments</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Late payments may result in:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Suspension of work until payment is received</li>
          <li>Late payment fees of 1.5% per month or the maximum allowed by law</li>
          <li>Withholding of deliverables, source code, or access credentials</li>
          <li>Termination of services for repeated late payments</li>
        </ul>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>3.5 Refund Policy</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          <strong>Important: Please read our refund policy carefully before engaging our services.</strong>
        </p>

        <h4 className='text-lg font-semibold text-white mb-2 mt-4'>Deposits and Upfront Payments</h4>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Initial deposits are generally non-refundable once work has commenced. This covers time spent on discovery, planning, and initial development. If the project is canceled before work begins, deposits may be refunded at our discretion.
        </p>

        <h4 className='text-lg font-semibold text-white mb-2 mt-4'>Milestone Payments</h4>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Once a milestone is completed and approved by the client, the corresponding payment is non-refundable. If you are unsatisfied with a milestone, you must notify us before approving it.
        </p>

        <h4 className='text-lg font-semibold text-white mb-2 mt-4'>Refund Eligibility</h4>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Refunds may be considered in the following circumstances:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>We fail to deliver agreed-upon services or deliverables</li>
          <li>Services do not meet the specifications outlined in the project agreement</li>
          <li>Technical issues make the delivered product unusable and cannot be resolved</li>
          <li>We cancel the project due to our inability to complete the work</li>
        </ul>

        <h4 className='text-lg font-semibold text-white mb-2 mt-4'>Refund Calculation</h4>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          If a refund is approved, the amount will be calculated based on:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Work completed to date (hours worked or milestones completed)</li>
          <li>Resources and expenses already incurred</li>
          <li>Time spent on project planning and discovery</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Partial refunds will reflect the proportion of incomplete work minus any non-recoverable costs.
        </p>

        <h4 className='text-lg font-semibold text-white mb-2 mt-4'>Refund Processing</h4>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Approved refunds will be processed within 7-14 business days of approval. Refunds will be issued to the original payment method used for the transaction. Please note:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Bank transfers may take 5-10 business days to appear in your account</li>
          <li>Credit card refunds may take 5-10 business days depending on your card issuer</li>
          <li>PayPal refunds are typically processed within 1-3 business days</li>
        </ul>

        <h4 className='text-lg font-semibold text-white mb-2 mt-4'>Non-Refundable Items</h4>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          The following are non-refundable:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Third-party costs (domain registrations, hosting fees, premium plugins, licenses)</li>
          <li>Completed and approved work</li>
          <li>Consultation and strategy sessions</li>
          <li>Services already rendered</li>
        </ul>

        <h4 className='text-lg font-semibold text-white mb-2 mt-4'>Requesting a Refund</h4>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          To request a refund, contact us at shah.nisarg39@gmail.com with:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Your project details and invoice number</li>
          <li>Reason for refund request</li>
          <li>Documentation supporting your claim (if applicable)</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We will review all refund requests within 5 business days and respond with our decision.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>3.6 Chargebacks</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          <strong>Important:</strong> Before initiating a chargeback with your payment provider, please contact us to resolve any issues. Unjustified chargebacks may result in:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Immediate termination of services</li>
          <li>Withholding of all deliverables and source code</li>
          <li>Legal action to recover costs and damages</li>
          <li>Reporting to credit agencies or fraud prevention services</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We are committed to resolving disputes amicably and will work with you to address any concerns before escalating to chargeback proceedings.
        </p>
      </section>

      {/* Project Delivery and Timeline */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>4. Project Delivery and Timeline</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Project timelines are estimated based on the defined scope and are subject to change due to:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Scope changes or additional feature requests</li>
          <li>Delayed feedback or approvals from the client</li>
          <li>Availability of required resources or third-party services</li>
          <li>Technical complexities or unforeseen issues</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We will make reasonable efforts to meet agreed timelines and will communicate any delays promptly. Timelines are estimates and not guaranteed delivery dates unless explicitly specified in writing.
        </p>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Deliverables will be provided electronically via agreed methods (email, cloud storage, repository access, etc.).
        </p>
      </section>

      {/* Client Responsibilities */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>5. Client Responsibilities</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          To ensure successful project completion, clients are responsible for:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Providing clear project requirements and specifications</li>
          <li>Supplying all necessary content, materials, and assets in a timely manner</li>
          <li>Providing timely feedback and approvals on deliverables</li>
          <li>Ensuring accuracy of all provided content and information</li>
          <li>Providing access to necessary systems, accounts, or credentials</li>
          <li>Making timely payments according to the agreed schedule</li>
          <li>Responding to communications within reasonable timeframes</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Delays caused by client's failure to fulfill these responsibilities may result in project timeline extensions or additional charges.
        </p>
      </section>

      {/* Intellectual Property Rights */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>6. Intellectual Property Rights</h2>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>6.1 Ownership Transfer</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Upon receipt of full payment, all intellectual property rights in the custom work created specifically for your project will be transferred to you. This includes:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Custom code and applications developed for your project</li>
          <li>Custom designs and graphics created for your project</li>
          <li>Project-specific documentation and materials</li>
        </ul>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>6.2 Exceptions</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          The following remain our property or the property of their respective owners:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Pre-existing code, frameworks, and libraries</li>
          <li>Third-party plugins, packages, and dependencies</li>
          <li>Reusable components and utility functions from our codebase</li>
          <li>Development tools, processes, and methodologies</li>
        </ul>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>6.3 Portfolio Rights</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Unless otherwise agreed in writing, we reserve the right to:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Display your project in our portfolio</li>
          <li>Use project screenshots and descriptions for marketing purposes</li>
          <li>Reference your project as a case study</li>
          <li>Include your company name in our client list</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          If confidentiality is required, this must be specified before project commencement.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>6.4 Client Content</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          You retain all rights to content, materials, and assets you provide. By providing these materials, you grant us a license to use them solely for the purpose of completing your project.
        </p>
      </section>

      {/* Revisions and Changes */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>7. Revisions and Changes</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          The number of included revisions will be specified in your project proposal. Typical revision policies include:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Minor revisions within original scope are typically included</li>
          <li>Major changes or scope modifications require additional payment</li>
          <li>Revisions must be requested within specified timeframes after delivery</li>
          <li>Excessive revisions beyond agreed limits will incur additional charges</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Scope changes or feature additions after project commencement will be documented in a change order with revised pricing and timeline.
        </p>
      </section>

      {/* Confidentiality */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>8. Confidentiality</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We respect the confidentiality of your business information and will not disclose your confidential information to third parties without your consent, except as required by law or as necessary to complete the project (e.g., sharing with subcontractors under NDA).
        </p>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          If additional confidentiality protections are required, a separate Non-Disclosure Agreement (NDA) can be executed.
        </p>
      </section>

      {/* Warranties and Disclaimers */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>9. Warranties and Disclaimers</h2>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>9.1 Limited Warranty</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We warrant that:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Services will be performed with reasonable skill and care</li>
          <li>Work will substantially conform to agreed specifications</li>
          <li>We have the right to provide the services and deliverables</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Bug fixes and corrections for issues directly caused by our work will be provided at no additional cost for 30 days after project completion, unless otherwise specified.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>9.2 Disclaimers</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          EXCEPT AS EXPRESSLY PROVIDED ABOVE, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Warranties of merchantability or fitness for a particular purpose</li>
          <li>Guarantees of specific results, traffic, or revenue</li>
          <li>Compatibility with all third-party systems or platforms</li>
          <li>Uninterrupted or error-free operation</li>
          <li>Security against all potential vulnerabilities</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We do not warrant that services will meet all your requirements or achieve specific business outcomes. The success of web applications depends on many factors outside our control.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>10. Limitation of Liability</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW:
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>10.1 Liability Cap</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Our total liability to you for any claims arising from or related to our services shall not exceed the total amount paid by you for the specific project or service giving rise to the claim, or $5,000, whichever is less.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>10.2 Excluded Damages</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Loss of profits, revenue, or business opportunities</li>
          <li>Loss of data or information</li>
          <li>Business interruption or downtime</li>
          <li>Reputational damage</li>
          <li>Cost of substitute services</li>
        </ul>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          This limitation applies regardless of the legal theory (contract, tort, negligence, or otherwise) and even if we have been advised of the possibility of such damages.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>10.3 Force Majeure</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, network infrastructure failures, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>10.4 Indemnification</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          You agree to indemnify and hold harmless Nisarg Shah from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Your use of our services or deliverables</li>
          <li>Your breach of these terms</li>
          <li>Content or materials you provide</li>
          <li>Your violation of any third-party rights</li>
        </ul>
      </section>

      {/* Termination */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>11. Termination</h2>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>11.1 Termination by Either Party</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Either party may terminate the service agreement:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>By mutual written agreement</li>
          <li>If the other party breaches these terms and fails to cure within 14 days of written notice</li>
          <li>If the other party becomes insolvent or enters bankruptcy proceedings</li>
        </ul>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>11.2 Payment Upon Termination</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Upon termination:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>Client must pay for all work completed up to the termination date</li>
          <li>Client must pay for any expenses already incurred</li>
          <li>Any deposits or advance payments are non-refundable</li>
        </ul>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>11.3 Post-Termination</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          After termination:
        </p>
        <ul className='ml-6 space-y-2 text-white-100 mb-4 list-disc'>
          <li>We will deliver all completed work upon receipt of payment</li>
          <li>Incomplete work remains our property unless otherwise agreed</li>
          <li>We are not obligated to provide source code for incomplete work</li>
          <li>Client access to development environments will be revoked</li>
        </ul>
      </section>

      {/* Dispute Resolution */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>12. Dispute Resolution</h2>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>12.1 Negotiation</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          In the event of any dispute, the parties agree to first attempt to resolve the matter through good-faith negotiation.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>12.2 Mediation</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          If negotiation fails, the parties agree to attempt mediation before pursuing legal action.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>12.3 Governing Law</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>12.4 Jurisdiction</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Any legal action or proceeding arising under these terms shall be brought exclusively in the courts located in Gujarat, India, and the parties consent to the personal jurisdiction of such courts.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>12.5 Attorney's Fees</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          In any legal action to enforce these terms, the prevailing party shall be entitled to recover reasonable attorney's fees and costs.
        </p>
      </section>

      {/* Miscellaneous */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>13. Miscellaneous</h2>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>13.1 Entire Agreement</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          These Terms and Conditions, together with any project proposal or agreement, constitute the entire agreement between you and Nisarg Shah regarding our services and supersede all prior agreements and understandings.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>13.2 Severability</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>13.3 Waiver</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          No waiver of any term or condition shall be deemed a further or continuing waiver of such term or any other term. Failure to enforce any provision shall not constitute a waiver of that provision.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>13.4 Assignment</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          You may not assign or transfer these terms or any rights hereunder without our prior written consent. We may assign these terms to any affiliate or successor without restriction.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>13.5 Independent Contractor</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          Our relationship is that of independent contractors. Nothing in these terms creates a partnership, joint venture, employment, or agency relationship.
        </p>

        <h3 className='text-xl font-semibold text-white mb-3 mt-6'>13.6 Modifications</h3>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className='text-2xl font-bold text-white mb-4 mt-8'>14. Contact Information</h2>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          For questions about these Terms and Conditions or to discuss your project, please contact:
        </p>
        <div className='ml-6 text-white-100 mb-4'>
          <p className='mb-2'><strong>Nisarg Shah</strong></p>
          <p className='mb-2'>MERN Stack Developer</p>
          <p className='mb-2'>Email: <a href="mailto:shah.nisarg39@gmail.com" className='text-secondary hover:text-white transition-colors'>shah.nisarg39@gmail.com</a></p>
          <p className='mb-2'>Website: <a href="/" className='text-secondary hover:text-white transition-colors'>Portfolio Contact Form</a></p>
        </div>
        <p className='text-base leading-relaxed text-white-100 mb-4'>
          By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
        </p>
      </section>

    </LegalPageLayout>
  );
}

export default TermsConditionsPage;
