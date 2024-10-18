'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from '@/components/TabButton/TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>Typescript</li>
        <li>React</li>
        <li>NextJS</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Danang University of Science and Technology </li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Developer (React)</li>
        <li>Meta Front-End Developer</li>
        <li>Problem Solving (Basic)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="https://avatars.githubusercontent.com/u/90706070?v=4"
          alt="Profile picture"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am Fullstack Developer with 1.5 year of experience working with ReactJS and Next.js. Proficient in
            building responsive, user-centric web applications using modern technologies like TypeScript, Tailwind CSS,
            and Node.js. Experienced in UI/UX design and handling both frontend and backend tasks. Looking to leverage
            my skills in developing scalable web solutions while continuously learning and growing in a professional
            environment.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
              {' '}
              Education{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find(t => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
