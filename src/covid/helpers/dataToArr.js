export const dataToArr = (data)=>{
    const dataArr = [];
    for(let key in data){
        dataArr.push(data[key]);
    }
    return dataArr;
}