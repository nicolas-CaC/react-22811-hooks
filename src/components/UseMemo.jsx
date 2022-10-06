import { useMemo, useState } from "react";

const funcionExterna = (nro = 2) => {

    for (let i = 0; i < nro; i++) {
        console.log('Soy el console.log dentro del for');
    }

    return `valor1: ${nro}`
}

export const UseMemo = ({ clase }) => {

    const [valor1, setValor1] = useState(3);
    const [valor2, setValor2] = useState(false);

    function seteandoValorUno() {
        setValor1(valor1 + 2)
    }

    function seteandoValorDos() {
        setValor2(!valor2)
    }

    const memoria = useMemo(() => funcionExterna(valor1), [valor1])

    return (
        <div className={ clase }>
            <h1>useMemo:</h1>

            <h4>{ memoria }</h4>
            <button
                className="btn btn-outline-light btn-dark"
                onClick={ seteandoValorUno }>
                setValor1
            </button>

            <h3>valor:2 { JSON.stringify(valor2) }</h3>
            <button
                className="btn btn-outline-light btn-dark"
                onClick={ seteandoValorDos }>
                setValor2
            </button>

        </div>
    )
}