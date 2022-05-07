import axios from "axios";

interface IRequest {
    query: {
        lat?: string;
        long?: string;
        city?: string;
        woeid?: string;
    }
    property: string;
}



class Api {
    private apiUrl = "https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search" as string;

    private configUrl = (req: IRequest) => {
        switch (req.property) {
            case "search-lat-long":
            case "search-city-name":
                this.apiUrl = "https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search"
                break;
            case "location":
                this.apiUrl = "https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/"
        }
    }

    get(req: IRequest) {
        this.configUrl(req)
        if (req.property === "search-lat-long") {
            return axios.get(`${this.apiUrl}/?lattlong=${req.query.lat},${req.query.long}`)
        } else if (req.property === "search-city-name") {
            return axios.get(`${this.apiUrl}/?query=${req.query.city}`)
        } else
            return axios.get(`${this.apiUrl}${req.query.woeid}`)
    }
}


export default new Api()
