
export const formatDate = (date)=>{
    const dateStr = date.toString();
    return `${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}`;
}