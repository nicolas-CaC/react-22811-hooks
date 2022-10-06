import { useSyncExternalStore } from "react"

export const UseSyncExternalStore = ({ clase }) => {

    const heightFromTop = useSyncExternalStore((listener) => {
        //evento
        window.addEventListener('scroll', listener)

        return () => {
            window.removeEventListener('scroll', listener)
        }
    },
        //snapshot, estado
        () => window.scrollY
    )


    return (
        <div className={ clase }>
            <h1>UseSyncExternalStore</h1>
            <h3>Tamaño de la pantalla</h3>
            <h3>{ heightFromTop }</h3>
        </div>
    )
}