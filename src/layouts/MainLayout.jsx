import { Outlet } from 'react-router-dom';
import { Navbar, Footer, ScrollToTop } from '../components';

const MainLayout = () => {
    return (
        <div className='relative z-0 bg-primary min-h-screen flex flex-col'>
            {/* ScrollToTop ensures page scrolls to top on navigation */}
            <ScrollToTop />

            <Navbar />

            <main className='flex-1 bg-primary'>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;
