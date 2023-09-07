import { ChartList } from "../components/ChartList";
import { useFetch } from "../hooks/useFetch"
import { Headers } from "../ui/Headers";
import { Spinner } from "../ui/Spinner/Spinner";

export const HomePage = () => {
    const { data, isLoading } = useFetch('/us/current.json');

    if (isLoading) return <Spinner />
    return (
        <div className="pt-4 container">
            <Headers
                text = "Current COVID data from US"
            />
            <ChartList
                dataCharts={data}
            />
        </div>
    )
}
