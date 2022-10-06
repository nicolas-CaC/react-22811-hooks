import { forwardRef } from "react"

export const DivForwardRef = forwardRef((props, ref) => {

    return (
        <div>
            <h3 style={ { color: 'purple' } }>
                { ref.current }
            </h3>
        </div>
    )
}
)