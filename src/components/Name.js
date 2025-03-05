import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Image from 'next/image';

const Name = () => {
    const { userData } = useContext(UserContext);
    return (
        <div className="mb-8">
            <h1 className="text-4xl font-bold font-oswald">{userData.name}</h1>
            <p className="text-sm mt-3 text-lg text-[var(--gray-tertiary)] font-medium">⭐ {userData.rating} • {userData.reviews} Reviews • {userData.experience}</p>
            
            <p className="text-sm mt-4 flex items-center gap-2 font-circular-std">
                <span>
                    <Image src="/images/location.png" alt="location" width={28} height={28} />
                </span> 
                {userData.location}
            </p>
        </div>
    );
};

export default Name;