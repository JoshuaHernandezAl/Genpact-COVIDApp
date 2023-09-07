
export const dataFilter = (data = []) => {
    if(data.length === 1){
        return data.map((item) => {
            const newData = {}
            for (let key in item) {
                if (!isNaN(item[key]) && item[key] !== null) {
                    newData[key] = item[key]
                }
            }
            return newData;
        }).slice(0,6);
    }
    const sortedData = data.map((item) => {
        const newData = {}
        for (let key in item) {
            if (!isNaN(item[key]) && item[key] !== null) {
                newData[key] = item[key]
            }
        }
        return newData;
    }).sort((a, b) => {
        return b.death - a.death
    }).slice(0,4);
    sortedData.unshift(data[data.length - 1]);
    sortedData.unshift(data[0]);
    return sortedData;
}
