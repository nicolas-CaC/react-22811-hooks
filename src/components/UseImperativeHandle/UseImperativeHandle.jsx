import { useRef } from "react"
import { Input } from "./Input";

export const UseImperativeHandle = ({ clase }) => {

    const elementoRef = useRef();

    function ejecucion() {
        elementoRef.current.funcion()
    }

    function datazos() {
        elementoRef.current.datitos()
    }

    return (
        <div className={ clase }>
            <h1>UseImperativeHandle</h1>
            <Input
                ref={ elementoRef }
            />
            <input
                onFocus={ () => console.log('ESTAS HACIENDO FOCO') }
                onBlur={ datazos }
                placeholder='No pongas nada acá'
            />
            <button
                onClick={ ejecucion }>
                Boton
            </button>
        </div>
    )
}