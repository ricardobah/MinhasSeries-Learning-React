import axios from 'axios'


const api = axios.create({
    baseURL:'http://localhost:3001/'

})
//export const loadGenres : () => api.get('genres')
const apis = {
    //loadGenres:loadGenres
    loadGenres : () => api.get('genres'),
    loadSeries : () => api.get('series'),
    loadstatusSerie : () => api.get('status'),
    saveSerie : (newSerie) => api.post('series', newSerie),
    loadSeriesByGenre : (genre) => api.get('series?genre='+genre),
    deleteSeries :(id)=>api.delete('series/'+id)
    
}
export default apis