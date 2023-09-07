import { ChartList } from "../components/ChartList";
import { useFetch } from "../hooks/useFetch";
import { Headers } from "../ui/Headers";
import { Spinner } from "../ui/Spinner/Spinner";

export const HistoricPage = () => {
    const { data, isLoading } = useFetch('/us/daily.json');

    if (isLoading) return <Spinner />
    return (
        <div className="pt-4 container">
            <Headers 
                text="Historic COVID data from US"
            />
            <ChartList
                dataCharts={data}
            />
        </div>
    )
}
