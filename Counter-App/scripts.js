const targetDate = new Date('2025-01-01T00:00:00')


function updatecountdown(){
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate

    const days = Math.floor(timeDifference/(1000*60*60*24));
    const hours = Math.floor((timeDifference % (1000*60*60*24) / (1000*60*60)));
    const minutes = Math.floor((timeDifference % (1000*60*60) / (1000*60)));
    const seconds = Math.floor((timeDifference % (1000*60) / 1000));

    document.getElementById('countdown').innerHTML=`${days}d ${hours}m ${minutes}h ${seconds}s`
    setTimeout(updatecountdown,1000)

}
updatecountdown()