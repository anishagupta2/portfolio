
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Qualifications from './components/Qualifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { Experience as ExperienceType, Qualification as QualificationType } from './types';
import { AcademicCapIcon, CheckBadgeIcon, DocumentTextIcon } from './components/icons';

const experienceData: ExperienceType[] = [
  {
    school: 'Gayatri Public School',
    duration: 'April 2019 - Present',
    role: 'Teacher (Classes 6-8)',
    description: 'Currently fostering a dynamic and supportive learning environment for middle school students, focusing on curriculum development and student engagement.'
  },
  {
    school: 'Shivalik Cambridge College',
    duration: '2016 - March 2019',
    role: 'Teacher',
    description: 'Taught a range of subjects, implementing innovative teaching strategies to improve student comprehension and performance.'
  },
  {
    school: 'Vijaya International School',
    duration: '2015 - 2016',
    role: 'Teacher',
    description: 'Began my teaching career by creating an inclusive classroom atmosphere and developing foundational skills in young learners.'
  }
];

const qualificationsData: QualificationType[] = [
  {
    degree: 'M.Sc.',
    institution: 'Dr. Bhimrao Ambedkar University',
    icon: <AcademicCapIcon />,
  },
  {
    degree: 'B.Sc.',
    institution: 'Dr. Bhimrao Ambedkar University',
    icon: <AcademicCapIcon />,
  },
  {
    degree: 'PG Diploma in EBT',
    institution: 'Dayal Bagh College',
    icon: <DocumentTextIcon />,
  },
  {
    degree: 'B.Ed.',
    institution: 'Dr. Bhimrao Ambedkar University',
    icon: <AcademicCapIcon />,
  },
  {
    degree: 'CTET Qualified',
    institution: 'Central Teacher Eligibility Test',
    icon: <CheckBadgeIcon />,
  },
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience experiences={experienceData} />
        <Qualifications qualifications={qualificationsData} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
