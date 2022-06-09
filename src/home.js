import React from 'react';
import Hero from './hero-section';
import Welcome from './welcome-section';
import './fonts/norwester.ttf';
import Approach from './approach-section';
import How from './how-section';
import What from './what-section';
import IsItAThing from './is-it-a-thing';
import TeamSection from './team-section';
import JobSection from './job-section';
import ContactSection from './contact-section';
import Footer from './footer';

function HomePage() {
    return (
    <div>
        <Hero />
        <Welcome />
        <Approach />
        <How />
        <What />
        <IsItAThing />
        <TeamSection />
        <JobSection />
        <ContactSection />
        <Footer />
    </div>
    );
}
export default HomePage;