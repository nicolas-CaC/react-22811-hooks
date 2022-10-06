import { memo } from "react";

// memo(COMPONENTE)
export const HijoMemo = memo(({ valor }) => {
    // Componente Fibonacci
    console.log('Soy el componente HijoMemo(Fibonacci)');

    return (
        <h5>{ valor }</h5>
    )
})
