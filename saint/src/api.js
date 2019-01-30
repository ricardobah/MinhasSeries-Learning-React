import axios from 'axios'


const api = axios.create({
    baseURL:'http://localhost:3001/'

})

const apis = {
    loadGenres : () => api.get('genres'),
    loadSeries : () => api.get('series'),
    loadstatusSerie : () => api.get('status'),
    saveSerie : (newSerie) => api.post('series', newSerie)
}
export default apis