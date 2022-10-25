const paises = [
    {value: 'AR', pais: 'Argentina'},
    {value: 'BO', pais: 'Bolivia'},
    {value: 'BR', pais: 'Brasil'},
    {value: 'CA', pais: 'Canadá'},
    {value: 'CL', pais: 'Chile'},
    {value: 'CO', pais: 'Colombia'},
    {value: 'CR', pais: 'Costa Rica'},
    {value: 'EC', pais: 'Ecuador'},
    {value: 'ES', pais: 'España'},
    {value: 'US', pais: 'Estados Unidos'},
    {value: 'FR', pais: 'Francia'},
    {value: 'MX', pais: 'México'},
    {value: 'PY', pais: 'Paraguay'},
    {value: 'PE', pais: 'Perú'},
    {value: 'GB', pais: 'Reino Unido'},
    {value: 'VE', pais: 'Venezuela'},
    {value: 'RU', pais: 'Rusia'},
    {value: 'UA', pais: 'Ucrania'},
    {value: 'UY', pais: 'Uruguay'},
    {value: 'JP', pais: 'Japón'},
]

export const paisesOrdenados = paises.sort((a, b) => {
    if (a.pais > b.pais) {
        return 1;
      }
      if (a.pais < b.pais) {
        return -1;
      }
      return 0;
})

