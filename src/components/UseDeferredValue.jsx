import { useDeferredValue, useState } from "react"
import { Accordion } from "react-bootstrap"

export const UseDeferredValue = ({ clase }) => {

    const [count, setCount] = useState(0)
    const deferredCount = useDeferredValue(count);

    const agregarItem = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <div className={ clase }>
                <h1>UseDeferredValue</h1>
                <h3>{ `Clicks: ${count}` }</h3>
                <h3>{ `Valor deferredValue: ${deferredCount}` }</h3>
                <button onClick={ agregarItem }>Sumar</button>
            </div>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Acordeon</Accordion.Header>
                    <Accordion.Body>
                        { Array(25000)
                            .fill(1)
                            .map((_, index) =>
                                (<span key={ index }>a</span>)) }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>


    )
}