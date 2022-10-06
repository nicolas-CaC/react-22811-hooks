import { useState } from "react";


export const UseState = ({ clase }) => {

    const [state, setState] = useState(0);

    function changeState() {
        setState(state + 1)
    }

    return (
        <div className={ clase }>
            <h1>El useState:</h1>
            <h3>{ state }</h3>
            <button className="btn btn-outline-primary"
                onClick={ changeState }>
                AcM Click
            </button>
        </div>
    );
}