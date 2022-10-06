import { useEffect, useState } from "react"


export const UseEffect = ({ clase }) => {

    const [valores, setValores] = useState({})

    useEffect(() => {

        fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setValores({
                    ars: datos.market_data.current_price.ars,
                    usd: datos.market_data.current_price.usd
                })
            })
            .catch(err => console.log('Hubo problemas para traer los datos', err))

    }, [valores])


    return (
        <div className={ clase }>
            <h1>Precio del Bitcoin:</h1>
            <h3>{ valores.ars && valores.ars } ARS - { valores.usd && valores.usd } USD</h3>
            <button
                className="btn btn-outline-warning"
                onClick={ () => setValores({}) }>Actualizar</button>
        </div>
    )
}