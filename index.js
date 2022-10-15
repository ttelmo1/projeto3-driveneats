let mainId = 0;
let drinkId= 0;
let dessertId= 0;


function selectMain(e){
    if(mainId !=0){
        clearStyle(mainId)
    }
    if(e.target.id){
        document.getElementById(e.target.id).style.border="solid 4px #32B72F"
        document.getElementById(e.target.id).style.padding="4px"
        document.getElementsByClassName(`${e.target.id}`)[0].style.visibility="visible"
        document.getElementsByClassName(`${e.target.id}`)[0].style.color="#32B72F"
    }
    mainId = e.target.id;
}

function selectDrink(e){
    if(drinkId !=0){
        clearStyle(drinkId)
    }
    if(e.target.id){
        document.getElementById(e.target.id).style.border="solid 4px #32B72F"
        document.getElementById(e.target.id).style.padding="4px"
        document.getElementsByClassName(`${e.target.id}`)[0].style.visibility="visible"
        document.getElementsByClassName(`${e.target.id}`)[0].style.color="#32B72F"
    }
    drinkId = e.target.id;
}

function selectDessert(e){
    if(dessertId !=0){
        clearStyle(dessertId)
    }
    if(e.target.id){
        document.getElementById(e.target.id).style.border="solid 4px #32B72F"
        document.getElementById(e.target.id).style.padding="4px"
        document.getElementsByClassName(`${e.target.id}`)[0].style.visibility="visible"
        document.getElementsByClassName(`${e.target.id}`)[0].style.color="#32B72F"
    }
    dessertId = e.target.id;
}

function clearStyle(id){
    document.getElementById(id).style.border=null
    document.getElementById(id).style.padding=null
    document.getElementsByClassName(`${id}`)[0].style.visibility="hidden"
}