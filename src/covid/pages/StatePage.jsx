import { useState } from "react";
import { ChartList } from "../components/ChartList";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "../ui/Spinner/Spinner";
import { stateCodes } from "../api/stateCodes";
import { Headers } from "../ui/Headers";


export const StatePage = () => {
    const stCodes = stateCodes
    const [url, setUrl] = useState('/states/ca/daily.json')
    const [selectedState, setselectedState] = useState('ca')
    const { data, isLoading } = useFetch(url);

    if (isLoading) return <Spinner />
    const onStateCodeChange = (e)=>{
        setselectedState(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(selectedState === '') return;
        setUrl(`/states/${selectedState}/daily.json`)
    }

    return (
        <div className="pt-4 container">
            <Headers
                text="COVID data from US by State"
            />
            <form className="d-flex mb-4" onSubmit={handleSubmit}>
                <select onChange={onStateCodeChange} className="form-control">
                    <option value="">Select a state</option>
                    {stCodes.map((state) => (
                        <option key={state.code} value={state.code}>
                            {state.name}
                        </option>
                    ))}
                </select>
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
