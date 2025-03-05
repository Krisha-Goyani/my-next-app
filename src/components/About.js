import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const About = () => {
    const { userData } = useContext(UserContext);
    return (
        <div className="w-[776px] h-[99px] mb-10">
            <h2 className="text-xl font-medium font-circular-std">About</h2>
            <p className="text-sm mt-3 text-base text-[var(--black-secondary)] font-normal leading-[24px]">{userData.about}</p>
        </div>
    );
};

export default About;