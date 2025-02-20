let myDiv = document.getElementById('myDiv');
document.addEventListener("mousemove", (e) =>{
    move(e);
})

const move = (e)=> {
    var x = e.pageX;
    var y = e.pageY;
    myDiv.style.left = x-100 + "px";
    myDiv.style.top = y-100 + "px";
}