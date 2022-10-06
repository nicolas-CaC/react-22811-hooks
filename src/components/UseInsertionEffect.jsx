import {
    useState,
    useEffect,
    useLayoutEffect,
    useInsertionEffect
} from "react"

export const UseInsertionEffect = ({ clase }) => {

    const [size, setSize] = useState(0)

    useEffect(() => {
        console.log('soy el useEffect y me ejecuto luego del renderizado');
    })

    useLayoutEffect(() => {
        console.log('soy el useLayoutEffect y e ejecuto antes que el renderizado (useEffect)');
    })

    useInsertionEffect(() => {
        console.log('soy el useInsertionEffect y me ejecuto antes que las mutaciones en el DOM (useLayoutEffect)');
    })

    return (
        <div
            className={ clase }>
            <h1>useInsertionEffect:</h1>
            <h3>{ size }</h3>
            <button
                className="btn btn-outline-danger"
                onClick={ () => setSize(size + 1) }>
                Tamaño
            </button>

        </div>
    )
}