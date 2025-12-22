import React from 'react';
import { Services, StarsCanvas } from '../components';
import { SeoHead } from '../components';

const ServicesPage = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <SeoHead
                title="Web Development Services"
                description="Custom website development, mobile apps, and e-commerce solutions. Check out our services tailored for growth."
                url="https://www.nashtech.dev/services"
            />
            <div className='pt-20'>
                <Services />
                <StarsCanvas />
            </div>
        </div>
    );
};

export default ServicesPage;
