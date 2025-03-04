import { createContext, useContext, useState } from 'react';

// Create a Context
const ProfileContext = createContext();

// Create a Provider Component
export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Kristin Watson",
      rating: "4.5",
      reviews: "2060",
      experience: "5 yrs",
      location: "Los Angeles, CA",
      about: "Reliable and trustworthy professional. I bring all necessary tools and materials.",
    },
    {
      id: 2,
      name: "John Doe",
      rating: "4.8",
      reviews: "1500",
      experience: "3 yrs",
      location: "New York, NY",
      about: "Expert in home renovations and repairs.",
    },
    // Add more profiles as needed
  ]);

  return (
    <ProfileContext.Provider value={{ profiles, setProfiles }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Create a custom hook to use the ProfileContext
export const useProfileContext = () => {
  return useContext(ProfileContext);
};
