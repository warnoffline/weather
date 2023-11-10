import axios from "axios";

const weathersService = async (city) => {
    if(city){
        const API_KEY = '68240ba49be1eb5ee6072c1954cfecc9'
        const api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        try{
            const response = await axios.get(api)
            console.log(response.data)
            return response.data;
        }
        catch(e){
            console.log(e)
        }
    } 
}

export default weathersService;