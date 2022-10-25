import useClima from '../hooks/useClima'
import Formulario from './Formulario'
import MensajeError from './MensajeError'
import Resultado from './Resultado'
import Spinner from './Spinner'

const AppClima = () => {
    const { resultado, spinner, errorMensaje } = useClima()
    return (
        <>
            <main className='dos-columnas'>
                <Formulario/>
                
                {
                    spinner ? <Spinner /> : 
                        resultado?.name ? <Resultado/> :
                        errorMensaje ? <MensajeError>{errorMensaje}</MensajeError> :
                        <p className='texto_blanco'>El clima se va a mostrar aquí</p>
                }
            </main>
        </>
    )
}

export default AppClima
