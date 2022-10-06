export const Button = ({ dispatch, type, nombre }) => {
    return (
        <button
            className="btn btn-secondary"
            onClick={ () => dispatch({ type }) }
        >{ nombre }</button>
    )
}