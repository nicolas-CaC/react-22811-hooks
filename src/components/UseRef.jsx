import { useRef } from "react";

export const UseRef = ({ clase }) => {

    const valorRef = useRef(5);
    const datosRef = useRef();

    const handleClick = () => {
        valorRef.current = valorRef.current + 10
        console.log('valorRef.current: ', valorRef.current);
        console.log(datosRef.current.getBoundingClientRect());
    }


    return (
        <div
            className={ clase }
            ref={ datosRef }
        >
            <h1>useRef:</h1>
            <h3>Valor: { valorRef.current } refCoins</h3>
            <button
                className="btn btn-outline-secondary"
                onClick={ handleClick }
            >Click Me</button>
        </div>
    )
}

