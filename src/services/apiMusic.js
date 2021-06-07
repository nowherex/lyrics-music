import axios from 'axios'

class MusicApi { 
    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa'
        })
    }

    async getLyric (id) {
        return await this.api.get(`&aa&musid=${id}`)
    }


}


export default new MusicApi();