import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative h-[271px] mt-5">
      <Image
        src="/images/hero.png" // Replace with the actual path to your hero image
        alt="Background"
        layout="responsive" // Adjust layout as needed
        width={1310} // Set the width
        height={216} // Set the height
        className="object-cover max-w-[1310px] max-h-[216px]" // Optional: to cover the area
      />
      {/* Profile Image */}
      <div className="absolute top-[155px] left-[30px] "> {/* Adjust position as needed */}
        <Image
          src="/images/profile-img.png" // Replace with the actual path to your profile image
          alt="Profile"
          width={100} // Set the width of the profile image
          height={100} // Set the height of the profile image
          className="rounded-full border-4 border-white" // Optional: styling for the profile image
        />
      </div>
    </div>
  );
};

export default HeroImage;