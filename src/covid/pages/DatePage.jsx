import { useState } from "react";
import { ChartList } from "../components/ChartList";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "../ui/Spinner/Spinner";
import { Headers } from "../ui/Headers";


export const DatePage = () => {
    const [url, setUrl] = useState('/us/daily.json')
    const [date, setDate] = useState('2021-03-07')
    const { data, isLoading} = useFetch(url);
    
    if (isLoading) return <Spinner />

    const handleDateChange = (e)=>{
        setDate(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUrl(`/us/${date.replaceAll('-','')}.json`);
    }

    return (
        <div className="pt-4 container">
            <Headers 
                text = "COVID data from US"
            />
            <form className="d-flex mb-4" onSubmit={handleSubmit}>
                <input type="date" id="fecha" name="fecha" max="2021-03-07" min="2020-01-13"
                    className="form-control"
                    onChange={handleDateChange}
                    value={date}
                />
                <button
                    className="btn btn-outline-primary"
                >
                    Search
                </button>
            </form>
            <ChartList
                dataCharts={data}
            />
        </div>
    )
}
