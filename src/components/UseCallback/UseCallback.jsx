import { useCallback, useState } from "react"
import { Memo } from "./Memo";

export const UseCallback = ({ clase }) => {

    const [valor, setValor] = useState(0);
    const usandoUseCallback = true;

    function cambiarValor() {
        setValor(valor + 1)
    }

    const cambiarValorConUseCallback = useCallback(() => {
        // setValor(valor + 1)
        setValor((valor) => valor + 1)
    }, [])



    if (usandoUseCallback) {

        return (
            <div className={ clase }>
                <h1>useCallback:</h1>
                <h3>{ valor }</h3>
                <Memo funcion={ cambiarValorConUseCallback } />
            </div>
        )

    } else {

        return (
            <div className={ clase }>
                <h1>useCallback:</h1>
                <h3>{ valor }</h3>
                <Memo funcion={ cambiarValor } />
            </div>
        )
    }
}