import { useState,useEffect} from "react"   
import { getCovidData } from "../helpers/";

export const useFetch = (url='')=>{
    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async()=>{
        setstate({
            ...state,
            isLoading: true,
        });
        
        const data = await getCovidData(url);
        
        setstate({
            data,
            isLoading: false,
            hasError: null
        });
    }
    useEffect(() => {
        getFetch()
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}

