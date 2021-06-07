import axios from 'axios'

class MusicApi { 
    constructor() {
        this.api = axios.create({
            // eslint-disable-next-line no-undef
            baseURL: `https://api.vagalume.com.br/search.php?apikey=${process.env.VUE_APP_KEY_VAGALUME}`
        })
    }

    async getLyric (id) {
        return await this.api.get(`&aa&musid=${id}`)
    }


}


export default new MusicApi();