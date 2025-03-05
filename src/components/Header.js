import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem"; // Import the NavItem component
import { useNavItems } from "../context/NavContext"; // Import the useNavItems hook

const Header = () => {
  const { navItems } = useNavItems(); // Get navigation items from context

  return (
    <header className="container-1 max-h-36 h-36">
      <div className="mx-auto h-36 flex flex-col justify-between items-center shadow">
        <div className="flex px-65 justify-between items-center w-full pt-7">
          <span className="pt-3 text-sm flex items-center gap-2">
            English{" "}
            <Image
              src="/images/arrow-down.png"
              alt="down-arrow"
              width={12}
              height={12}
            />
          </span>
          <div>
            <Image
              src="/images/logo.png"
              alt="Flex Crew Logo"
              className="h-10"
              width={226}
              height={48}
            />
          </div>
          <div className="pt-3 flex gap-11">
            <Image
              className="w-[24px] h-[24px]"
              src="/images/notification.png"
              title="notification"
              alt="notification"
              width={24}
              height={24}
            />
            <div className="flex gap-1">
              <Image
                className="w-[24px] h-[24px]"
                src="/images/profile.png"
                title="profile"
                alt="profile"
                width={24}
                height={24}
              />
              <span className="text-sm">Rone Bennett</span>
            </div>
          </div>
        </div>
        <nav>
          <ul className="flex mt-3 mb-6 py-1_5 text-base w-[802px] h-[36px] justify-between items-center font-circular-std">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                className={item.label === 'Post a Job' ? 'bg-[var(--redtertiary)] text-[var(--redprimary)] rounded-full border-[var(--border)]  px-4 py-2' : ''}
              >
                {item.label}
              </NavItem>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;