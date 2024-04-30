import SideNav from "./dashboard/sidenav";
import styles from "@/ui/styles/header.module.css";
import Image from 'next/image'

export default function Header(){
    return(
        <>
        <div className={styles.flex}>
        </div>
        <div className={`${styles.cabecera} ${styles.flex}` }>
            
            <div className={styles.contenidoCabecera}>
                <Image 
                    src="/logo.png"
                    width={32}
                    height={32}
                    alt="Logo mesa mágica"
                ></Image>
                <SideNav></SideNav>
            </div>
            
        </div>
        </>
    )
}