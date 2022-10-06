import { useState } from "react"
import { Hijo } from "./Hijo"
import { HijoMemo } from "./HijoMemo"

export const Memo = ({ clase }) => {

    const [valor, setValor] = useState(0)
    const [valorMemo, setValorMemo] = useState(1)
    const [fibo, setFibo] = useState(0)

    function fibonacci() {
        setValorMemo(valorMemo + fibo)
        setFibo(valorMemo)
    }

    const container = 'd-flex align-items-end'
    const boton = (color) => { return `btn btn-outline-${color} mx-3` }

    console.log('Soy el componente Memo');

    return (
        <div className={ clase }>

            <h1>Memo:</h1>

            <div className={ container }>
                <Hijo valor={ valor } />
                <button
                    className={ boton('primary') }
                    onClick={ () => setValor(valor + 1) }>
                    Suma
                </button>
            </div>

            <div className={ container }>
                <HijoMemo valor={ valorMemo } />
                <button
                    className={ boton('secondary') }
                    onClick={ fibonacci }>
                    Fibonacci
                </button>
            </div>

        </div>
    )
}