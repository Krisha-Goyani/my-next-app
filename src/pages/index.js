import Header from '../components/Header';
import ProfileProvider from '../components/ProfileCard';
import { useProfileContext } from '../context/ProfileContext';  

export default function Home() {
  const { profiles } = useProfileContext(); // Access profiles from context

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-4">
        {profiles.map((profile) => (
          <ProfileProvider 
            key={profile.id}
            name={profile.name}
            rating={profile.rating}
            reviews={profile.reviews}
            experience={profile.experience}
            location={profile.location}
            about={profile.about}
          />
        ))}
      </div>
    </div>
  );
}