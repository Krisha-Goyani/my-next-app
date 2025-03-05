import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Languages = () => {
    const { userData } = useContext(UserContext);
    return (
        <div>
            <h2 className="text-xl font-medium font-circular-std">Spoken Languages</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
                {userData.languages.map((language, index) => (
                    <li key={index} className="text-base text-[var(--black-tertiary)] font-normal bg-[var(--blue-light)] px-3 py-2 rounded-md px-5 py-2 font-circular-std">{language}</li>
                ))}
            </ul>
        </div>
    );
};

export default Languages;