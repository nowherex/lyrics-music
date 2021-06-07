import axios from 'axios'

class Api { 
    constructor() {
        this.api = axios.create({
            baseURL: 'https://suggest.vagalume.com.br/json?q='
        })
    }

    async getMusicArtist (term) {
        return await this.api.get(`${term}&limitrows=150`)
    }
}


export default new Api();