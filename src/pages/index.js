// pages/index.js
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import profiles from '../components/profiles'; // Import if using a separate file

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-4">
        {profiles.map((profile) => (
          <ProfileCard 
            key={profile.id} // Use a unique key   for each card
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