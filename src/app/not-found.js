import Link from "next/link";

export default function NotFound(){
    return (
        <div>
            <h1>No encontrado</h1>
            <Link href={"/"}>
            <button>Inicio</button>
            </Link>
            
        </div>
    )
}