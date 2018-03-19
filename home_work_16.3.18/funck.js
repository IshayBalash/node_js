function time(){
    let date=new Date;
    let hour=date.getHours();
    return hour;
}

module.exports={
    time:time
}