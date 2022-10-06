export const OnClickCapture = ({ clase }) => {

    function handleClick() {
        console.log('Click primer boton');
    }

    function handleClickDos(evento) {
        console.log('Click segundo boton');
        evento.stopPropagation();
        // evento.nativeEvent.stopImmediatePropagation();

    }

    function handleClickCapture(evento) {
        console.log('Click Capture! =O)');
        evento.stopPropagation();
    }

    return (
        <div className={ clase }
            onClick={ handleClickCapture }>
            <h1>onClickCapture:</h1>
            <button
                className="btn btn-outline-success"
                onClick={ handleClick }>
                Primer Clic
            </button>
            <button
                className="btn btn-outline-success"
                onClick={ handleClickDos }>
                Segundo Clic
            </button>
        </div>
    )
}

