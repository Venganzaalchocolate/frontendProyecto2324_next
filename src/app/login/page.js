"use client"
import styles from "@/ui/styles/login.module.css";
import { open_sans, open_sans_titulos } from "@/ui/fonts";
import Link from "next/link";
import { useState } from "react";
import { validEmail, validPassword } from "@/lib/valid";


export default function Login () {
    const [data, setData]=useState({})
    const [valid, setValid]=useState({})

    const handleChange = (event) => {
        let dataAux={...data}
        dataAux[event.target.name]=event.target.value
        setData(dataAux); // Actualizar el estado con el nuevo valor del input
        let validAux= { ...valid }
        let keysAux=Object.keys(dataAux)
        keysAux.map((x)=>{
            validAux[x]=(x=='email')?validEmail(dataAux[x]):(validPassword(dataAux[x]));
        })
       setValid(validAux)
    };

    const class_input=(tipo)=>{
        return (Object.keys(data).length==0)
        ?'input'
        :(valid[tipo]==undefined || valid[tipo])
            ?'input'
            :'input inputError'
    }

    const enviar=()=>{

    }
    
    return (
        <div id={styles.caja}>
            <div id={styles.contenedorLogin}>
                <h2 className={`${styles.titulocontenedor} ${open_sans_titulos.className}`}>LOGIN</h2>
                <label for="email" className={`label ${open_sans_titulos.className}`}>EMAIL</label>
                <input name="email" id="email" type="email" className={class_input("email")} value={data.email}  onChange={handleChange}></input>
                <label for="pass" className={`label ${open_sans_titulos.className}`}>CONTRASEÑA</label>
                <input name="pass" id="pass" type="password" className={class_input("pass")}  value={data.pass}  onChange={handleChange}></input>
                <div className={styles.enlaces}>
                    <label className="links" >¿Has olvidado tu contraseña?</label>
                    <button onClick={()=>enviar()}>Enviar</button>
                    <button>Loguearse con google</button>
                    <label className="links">Crea una cuenta</label>
                </div>  
            </div>
        </div>
        
    )
}