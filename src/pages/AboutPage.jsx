import React from 'react';
import { About, StarsCanvas } from '../components';
import { SeoHead } from '../components';

const AboutPage = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <SeoHead
                title="About Us - Professional Tech Partner"
                description="Learn about NashTech's journey, experience, and commitment to delivering high-quality software solutions."
                url="https://www.nashtech.dev/about"
            />
            <div className='pt-20'>
                <About />
                <StarsCanvas />
            </div>
        </div>
    );
};

export default AboutPage;
