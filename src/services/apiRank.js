import axios from 'axios'

class ApiRank { 
    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.vagalume.com.br/rank.php?'
        })
    }

    async getRankMusic (limit) {
        return await this.api.get(`apikey=660a4395f992ff67786584e238f501aa&type=mus&&scope=translations&limit=${limit}`)
    }

    async getRankArtist (limit) {
        return await this.api.get(`apikey=660a4395f992ff67786584e238f501aa&type=art&period=month&scope=translations&limit=${limit}`)
    }


}


export default new ApiRank();