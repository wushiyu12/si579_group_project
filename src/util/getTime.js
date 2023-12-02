const getTime = (timestamp) => {
        const temp = new Date(timestamp);
        const date = new Date(new Date(temp.setDate(temp.getDate())).toLocaleString('en-US', {timeZone: 'GMT'}))
        return `${date.getHours() < 10? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() < 10? `0${date.getMinutes()}` : date.getMinutes()}`;
    };
  
export{getTime}