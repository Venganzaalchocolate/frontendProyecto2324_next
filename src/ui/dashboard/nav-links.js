import {
  HomeIcon,
  UserIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import styles from "@/ui/styles/nav.module.css";
import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Shooping',
    href: '/shooping',
    icon: ShoppingCartIcon,
  },
  { name: 'Login', href: '/login', icon: UserIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${styles.links} `}
          >
            <LinkIcon/>
          </Link>
        );
      })}
    </>
  );
}
