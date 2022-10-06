import { memo } from "react";

export const Memo = memo(({ funcion }) => {

    console.log('Se ha creado un componente Memo-Button');

    return (
        <button
            className="btn btn-primary"
            onClick={ funcion }>
            I'm the button
        </button>
    )
})