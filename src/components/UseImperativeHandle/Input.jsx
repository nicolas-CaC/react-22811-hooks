import { forwardRef, useImperativeHandle, useRef, useState } from "react"

export const Input = forwardRef((props, ref) => {

    const [valor, setValor] = useState('')
    const inputRef = useRef()

    function funcion() {
        console.log('Soy la función', inputRef.current.value);
    }

    useImperativeHandle(ref, () => {
        return {
            funcion,
            datitos: () => console.log(inputRef.current.getBoundingClientRect())
        }
    })

    return (

        <input
            ref={ inputRef }
            value={ valor }
            onChange={ e => {
                setValor(e.target.value)
                document.title = e.target.value
            } }
        // {...props}
        />
    )
})