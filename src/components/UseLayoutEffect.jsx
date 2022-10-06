import { useEffect, useLayoutEffect, useState } from "react";

export const UseLayoutEffect = ({ clase }) => {

    const [size, setSize] = useState(0);

    useEffect(() => {
        console.log('Primer useEffect');
    })

    useEffect(() => {
        console.log('Segundo useEffect');
    })

    useLayoutEffect(() => {
        console.log('Soy el useLayoutEffect');
    })

    return (
        <div
            className={ clase }>
            <h1>useLayoutEffect:</h1>
            <h3>{ size }</h3>
            <button
                className="btn btn-outline-danger"
                onClick={ () => setSize(size + 1) }>
                Tamaño
            </button>
        </div>
    )
}