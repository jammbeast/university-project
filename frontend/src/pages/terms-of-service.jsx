import React from 'react'
import Header from '../components/header'

const About = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto mt-10 space-y-10">
        {/* Terms of Service Content */}
        <div className="h-[1000px] bg-gray-400">Terms of Service Content</div>
        </main>
        </div>
    );
};

export default About;