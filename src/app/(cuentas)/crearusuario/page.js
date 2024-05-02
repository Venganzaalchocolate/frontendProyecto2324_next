"use client"
import styles from "@/ui/styles/form.module.css";
import Form from "@/ui/dashboard/form";



export default function Creausuario () {
    const botones= <div className={styles.enlaces}>
                    <button className={styles.enviar} onClick={()=>enviar()}>Enviar</button> 
                    <button>Loguearse con google</button>
        </div>; 
    return (
        <Form datos={['nombre','email','password', 'direccion']} cabecera={'CREAR CUENTA'} botones={botones}></Form>
    )
}