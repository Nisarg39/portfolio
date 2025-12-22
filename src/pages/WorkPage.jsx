import React from 'react';
import { Works, StarsCanvas } from '../components';
import { SeoHead } from '../components';

const WorkPage = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <SeoHead
                title="Our Work - Case Studies & Portfolio"
                description="Explore our portfolio of custom web applications, mobile apps, and SaaS platforms built for clients worldwide."
                url="https://www.nashtech.dev/work"
            />
            <div className='pt-20'>
                <Works />
                <StarsCanvas />
            </div>
        </div>
    );
};

export default WorkPage;
