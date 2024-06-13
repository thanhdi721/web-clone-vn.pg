import Header from '../../components/SubHeader/index';
import Footer from '../../components/SubFooter/index';
import HomePage from '../../components/HomePage/HomePage';
import React from 'react';

function LandingPage() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <HomePage />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default LandingPage;
