import axios from 'axios'

class ApiYoutube { 
    constructor() {
        this.api = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3/search?maxResults=1&orderby=relevance&part=snippet&q='
        })
    }

    async getVideo (term) {
        // eslint-disable-next-line no-undef
        return await this.api.get(`${term}&type=video&key=${process.env.VUE_APP_KEY_YOUTUBE}`)
    }
}


export default new ApiYoutube();