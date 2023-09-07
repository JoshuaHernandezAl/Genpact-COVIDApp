import { covidAPI } from "../api/axiosConfig";
import { dataFilter } from "./";


export const getCovidData = async(url)=>{
    const {data} = await covidAPI.get(url);
    if(!data.length) 
        return dataFilter([data]);
    return dataFilter(data);
}