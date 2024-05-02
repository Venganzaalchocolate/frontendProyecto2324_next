"use client"
import styles from "@/ui/styles/form.module.css";
import { open_sans, open_sans_titulos } from "@/ui/fonts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { validEmail, validPassword, validString } from "@/lib/valid";
import {textErrors} from "@/lib/textErrors";



export default function Form ({datos, cabecera, botones, tipo}) {
    const [data, setData]=useState({})
    const [valid, setValid]=useState({})

    useEffect(()=>{
        const datosAux={}
        datos.map((x)=>{
            datosAux[x]=true
        })
        setValid(datosAux)
    }, [])

    const crearCeldas=()=>{
        return datos.map((x)=>{
            return <>
            <label for={x} className={`label ${open_sans_titulos.className}`}>{x.toUpperCase()}</label>
            <input name={x} id={x} type={x} className={class_input(x)} value={data[x]}  onChange={handleChange}></input>
            <span className="errorSpan">{( valid[x])?null:textErrors(x)}</span>
            </>
            
        })
    }

    const validado=(x, dato)=>{
        switch (x) {
            case 'email':
                return validEmail(dato);
            case 'nombre':
                return validString(dato);
            case 'password':
                return validPassword(dato);
            case 'direccion':
                return validString(dato);    
            default:
                break;
        }
    }

    const handleChange = (event) => {
        let dataAux={...data}
        dataAux[event.target.name]=event.target.value
        setData(dataAux); // Actualizar el estado con el nuevo valor del input
        let validAux= { ...valid }
        
        let keysAux=Object.keys(dataAux)
        keysAux.map((x)=>{
            validAux[x]=validado(x, dataAux[x]);
        })
        console.log(validAux)
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
        if(tipo){

        }
    }
    
    return (
        <div id={styles.caja}>
            <div id={styles.contenedorLogin}>
                <h2 className={`${styles.titulocontenedor} ${open_sans_titulos.className}`}>{cabecera}</h2>
                {crearCeldas()}
                {botones} 
            </div>
        </div>









        
    )
}