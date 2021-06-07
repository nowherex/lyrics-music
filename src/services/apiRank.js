import axios from 'axios'

class ApiRank { 
    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.vagalume.com.br/rank.php?'
        })
    }

    async getRankMusic (limit) {
        // eslint-disable-next-line no-undef
        return await this.api.get(`apikey=${process.env.VUE_APP_KEY_VAGALUME}&type=mus&&scope=translations&limit=${limit}`)
    }

    async getRankArtist (limit) {
        // eslint-disable-next-line no-undef
        return await this.api.get(`apikey=${process.env.VUE_APP_KEY_VAGALUME}&type=art&period=month&scope=translations&limit=${limit}`)
    }


}


export default new ApiRank();