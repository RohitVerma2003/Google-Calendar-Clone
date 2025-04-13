const getTime = (num)=>{
    let time = num , format = "";
    
    if(num === 0) time = 12;
    if(num > 12) time = num - 12;

    if(num >= 0 && num < 12) format = "AM";
    else format = "PM";

    return {time , format}
}

export default getTime;