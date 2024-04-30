import Link from 'next/link';
import NavLinks from "@/ui/dashboard/nav-links";
import styles from "@/ui/styles/nav.module.css";

export default function SideNav() {
  return (
      <div className={styles.cajaNav}>
        <NavLinks />
      </div>
  );
}
