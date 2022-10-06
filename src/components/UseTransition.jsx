import { useState, useTransition } from "react"
import { Accordion } from "react-bootstrap";

export const UseTransition = ({ clase }) => {

    const [count, setCount] = useState(0)
    const [list, setList] = useState(20000)

    const [loading, startTransition] = useTransition();

    const addItems = () => {
        setCount(count + 1)
        startTransition(() => setList(list + 1))
    }

    return (
        <div>
            <div className={ clase }>
                <h1>useTransition</h1>
                <h3>Count: { count }</h3>
                <button
                    className="btn btn-warning"
                    onClick={ addItems }>
                    Agregar números
                </button>

                { loading ? <p>Cargando...</p> : undefined }

            </div>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Acordeon</Accordion.Header>
                    <Accordion.Body>
                        { Array(list)
                            .fill(1)
                            .map((_, index) =>
                            (<span key={ index }>
                                { list - index }
                            </span>)) }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}