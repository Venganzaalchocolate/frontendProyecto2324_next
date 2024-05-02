"use client"
import Link from "next/link";
import Form from "@/ui/dashboard/form";
import styles from "@/ui/styles/form.module.css";


export default function Recuperar () {
    const botones= <div className={styles.enlaces}>
                    <button className={styles.enviar} onClick={()=>enviar()}>Enviar</button> 
        </div>; 
    return (
        <Form datos={['email']} cabecera={'RECUPERAR CONTRASEÑA'} botones={botones}></Form>
    )
}
