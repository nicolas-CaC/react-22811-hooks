import { useReducer } from "react";
import { Button } from "./Button";

const initialState = { contador: 0 };

function reducer(state, action) {

    switch (action.type) {
        case 'incrementar':
            return { contador: state.contador + 1 }
        case 'decrementar':
            return { contador: state.contador - 1 }
        case 'multiplicar':
            return { contador: state.contador * 2 }
        default:
            throw new Error('No conozco ese valor')
    }
}

export const UseReducer = ({ clase }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className={ clase }>
            <h1>UseReducer</h1>
            <h3>Count: { state.contador }</h3>
            <Button dispatch={ dispatch } type='incrementar' nombre='Suma' />
            <Button dispatch={ dispatch } type='decrementar' nombre='Resta' />
            <Button dispatch={ dispatch } type='multiplicar' nombre='Multiplica' />
            <Button dispatch={ dispatch } type='dividr' nombre='Divide' />

        </div>

    )
}