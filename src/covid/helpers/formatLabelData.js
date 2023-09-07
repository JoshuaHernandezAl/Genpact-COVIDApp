
export const formatLabelData = (label)=>{
    return label.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase();
}