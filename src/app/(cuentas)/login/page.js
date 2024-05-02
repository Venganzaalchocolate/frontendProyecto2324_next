"use client"
import Link from "next/link";
import Form from "@/ui/dashboard/form";
import styles from "@/ui/styles/form.module.css";


export default function Login () {
    const botones= <div className={styles.enlaces}>
                    <Link href={"/recuperar"}>
                        <label className="links" >¿Has olvidado tu contraseña?</label>
                    </Link>
                    <button className={styles.enviar} onClick={()=>enviar()}>Enviar</button> 
                    <button>Loguearse con google</button>
                    <Link href={"/crearusuario"}>
                    <label className="links">Crea una cuenta</label>
                    </Link>
        </div>; 
    return (
        <Form datos={['email', 'password']} cabecera={'LOGIN'} botones={botones}></Form>
    )
}


