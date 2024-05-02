'use client'
import Image from "next/image";
import styles from "@/ui/styles/page.module.css";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:4000/api/users";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); // Aquí puedes hacer lo que quieras con los datos recibidos
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // El array vacío como segundo argumento indica que este efecto solo se ejecuta una vez, equivalente a componentDidMount en clases de React


  return (
    <main className={styles.main}>
    </main>
  );
}

