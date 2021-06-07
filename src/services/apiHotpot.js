import axios from 'axios'

class ApihotSpot { 
    constructor() {
        this.api = axios.create({
            // eslint-disable-next-line no-undef
            baseURL: `https://api.vagalume.com.br/hotspots.php?apikey=${process.env.VUE_APP_KEY_VAGALUME}`
        })
    }

    async getHotSpot () {
        return await this.api.get()
    }


}


export default new ApihotSpot();