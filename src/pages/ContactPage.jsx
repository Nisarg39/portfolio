import React from 'react';
import { Contact, StarsCanvas } from '../components';
import { SeoHead } from '../components';

const ContactPage = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <SeoHead
                title="Contact Us - Start Your Project"
                description="Get in touch with NashTech for your next web development or AI project. Request a quote today."
                url="https://www.nashtech.dev/contact"
            />
            <div className='pt-20'>
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    );
};

export default ContactPage;
