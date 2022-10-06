import { useId } from "react";
import { Form, InputGroup } from "react-bootstrap"

export const UseId = ({ clase }) => {

    const id = useId();

    return (
        <div className={ clase }>
            <h1>UseId</h1>
            <form>
                <label htmlFor={ id }>Soy el label</label>
                <input id={ id } type='checkbox' name='checkin' />
            </form>

            <InputGroup className='mb-3 w-50' size='md'>
                <InputGroup.Text id='basic-addon1'>Ingrese algo</InputGroup.Text>
                <Form.Control
                    placeholder='El algo'
                    aria-label='algo'
                    aria-describedby='basic-addon1'
                />
            </InputGroup>
        </div>
    )
}