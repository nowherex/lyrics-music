import axios from 'axios'

class ApiYoutube { 
    constructor() {
        this.api = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3/search?maxResults=1&orderby=relevance&part=snippet&q='
        })
    }

    async getVideo (term) {
        return await this.api.get(`${term}&type=video&key=AIzaSyAM39o9fiwmJHMndQ0TCyYfnEF1_uSERzw`)
    }
}


export default new ApiYoutube();