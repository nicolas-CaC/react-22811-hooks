import { useRef } from "react";
import { DivForwardRef } from "./DivForwardRef";
import { SpanForwardRef } from "./SpanForwardRef";

export const ForwardRef = ({ clase }) => {

    const forwardRef = useRef('forwardRef');

    return (
        <div className={ clase } onClick={ () => console.log('ho') }>
            <h2>{ forwardRef.current }:</h2>
            <DivForwardRef ref={ forwardRef } />
            <SpanForwardRef ref={ forwardRef } />
        </div>
    )
}