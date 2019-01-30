import axios from 'axios'


const api = axios.create({
    baseURL:'http://localhost:3001/'

})

const apis = {
    loadGenres : () => api.get('genres'),
    loadSeries : () => api.get('series')

}
export default apis