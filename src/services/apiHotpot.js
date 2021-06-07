import axios from 'axios'

class ApihotSpot { 
    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.vagalume.com.br/hotspots.php?apikey=660a4395f992ff67786584e238f501aa'
        })
    }

    async getHotSpot () {
        return await this.api.get()
    }


}


export default new ApihotSpot();