import { forwardRef } from "react"

export const SpanForwardRef = forwardRef((props, ref) => {
    return (
        <span>
            <h2 style={ { color: 'brown' } }>{ ref.current }</h2>
        </span>
    )
})