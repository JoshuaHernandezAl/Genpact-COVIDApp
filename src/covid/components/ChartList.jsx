import React from 'react'
import { ChartComponent } from './ChartComponent'
import { MoreInfoTable } from './MoreInfoTable'

export const ChartList = React.memo(({ dataCharts = [] }) => {
    return (
        <div className={dataCharts.length === 1 ? 'container' : "row row-cols-md-2 g-3"}>
            {
                dataCharts.map(dataChart => (
                    <div className="d-flex flex-column mb-3 align-items-center" key={`${dataChart.date}+${Math.random()}`}>
                        <div className="d-flex flex-row align-items-center">

                            <ChartComponent
                                positive={dataChart.positive}
                                negative={dataChart.negative}
                                date={dataChart.date}
                            />
                            <ChartComponent
                                hospitalizedCurrently={dataChart.hospitalizedCurrently}
                                death={dataChart.death}
                                hospitalized={dataChart.hospitalized}
                                date={dataChart.date}
                            />
                        </div>

                        <MoreInfoTable
                            data={dataChart}
                        />
                    </div>
                ))
            }
        </div>
    )
})
