import { Fragment, useState } from "react"
import useClima from "../hooks/useClima"
import { paisesOrdenados } from "../constants"
import MensajeError from "./MensajeError"

const Formulario = () => {

    const [ alerta, setAlerta ] = useState('')

    const { busqueda, datosBusqueda, consultarClima, setErrorMensaje, setResultado } = useClima()
    const { ciudad, pais } = busqueda

    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(busqueda).includes('')) {
            setResultado({})
            setAlerta('Todos los campos son obligatorios')
            return
        }
        consultarClima(busqueda)
        setErrorMensaje('')
        setAlerta('')
    }

    return (
        <div className='contenedor'>
            {alerta && <MensajeError>{alerta}</MensajeError>}
            <form
                onSubmit={handleSubmit}
            >
            <div className='campo'>
                    <label htmlFor='ciudad'>Ciudad</label>
                    <input 
                        type='text'
                        id='ciudad'
                        name='ciudad'
                        onChange={datosBusqueda}
                        value={ciudad}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='pais'>País</label>
                    <select
                        id='pais'
                        name='pais'
                        value={pais}
                        onChange={datosBusqueda}
                    >
                        <option>-- Seleccione un País --</option>
                        {paisesOrdenados.map(({value, pais}) => (
                            <Fragment
                                key={pais}
                            >
                                <option value={value}>{pais}</option>
                            </Fragment>
                        ))}
                    </select>
                </div>

                <input type="submit" value='consultar clima' />
            </form>
        </div>
    )
}

export default Formulario
