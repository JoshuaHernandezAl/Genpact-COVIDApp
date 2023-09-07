import { formatDate, formatLabelData } from "../helpers"

export const MoreInfoTable = ({ data = {} }) => {
    const dataToArr = Object.entries(data).map(([key, value]) => ({ key, value }))
    
    return (
        <table className="table table-primary table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">DATA</th>
                    <th scope="col">AMOUNT</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {
                    dataToArr.map(({ key, value }) => (
                        <tr key={`${key}+${value}`}>
                            <th>{formatLabelData(key)}</th>
                            <td>{(key === 'date')? formatDate(value) : value??"No info"}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}