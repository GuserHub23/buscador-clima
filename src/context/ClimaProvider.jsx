import axios from "axios";
import { createContext, useState } from "react";

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {
    const [busqueda, setBusqueda] = useState({
        ciudad : '',
        pais: ''
    })

    const [ resultado, setResultado ] = useState({})

    const [ spinner, setSpinner ] = useState(false)

    const [ errorMensaje, setErrorMensaje ] = useState('')

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const consultarClima = async datos => {
        setSpinner(true)
        try {
            const { ciudad, pais } = datos

            const appId = import.meta.env.VITE_API_KEY

            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            const { data } = await axios(url)

            const { lat, lon } = data[0]

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const { data: clima } = await axios(urlClima)

            setResultado(clima)

        } catch (error) {
            setErrorMensaje('Error de búsqueda, intenta con un país y ciudad válidos')
            setResultado({})
        } finally {
            setSpinner(false)
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                setResultado,
                spinner,
                errorMensaje,
                setErrorMensaje
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}

export default ClimaContext