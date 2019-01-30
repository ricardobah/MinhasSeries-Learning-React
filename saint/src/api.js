import axios from 'axios'


const api = axios.create({
    // baseURL:'http://localhost:3001/'
    baseURL:'https://httpbin.org/'
})

const apis = {
    loadGenres : () => api.get('genres'),
    loadSeries : () => api.get('series'),
    loadstatusSerie : () => api.get('status'),
    saveSerie : (newSerie) => api.post('series', newSerie),
    begreen : () => api.post('post')
}
export default apis