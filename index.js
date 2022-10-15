let mainId = 0;
let drinkId= 0;
let dessertId= 0;
let mainDishes;
let drink;
let dessert;
let total;
let client;
let address;


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
    confirmOrder()
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
    confirmOrder()
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
    confirmOrder()
}

function clearStyle(id){
    document.getElementById(id).style.border=null
    document.getElementById(id).style.padding=null
    document.getElementsByClassName(`${id}`)[0].style.visibility="hidden"
}

// Trocando a cor do botão ao pressionar

function confirmOrder(){
    if(mainId && drinkId && dessertId != 0){
        document.getElementsByClassName("confirm-button")[0].style.backgroundColor="#32B72F"
        document.getElementsByClassName("confirm-button")[0].innerText="Fechar pedido"
        document.getElementsByClassName("confirm-button")[0].style.fontFamily="Roboto"
    }
}

function closeOrder(){
    if(mainId == 0 || drinkId == 0 || dessertId == 0){
        return
    }
    client = prompt("Digite seu nome")
    address = prompt("Digite seu endereço")

    let order = {
        mainCourse : {
            product : document.getElementById(mainId).getElementsByTagName("p")[0].innerText,
            value : document.getElementById(mainId).getElementsByTagName("p")[2].innerText,
        }
        ,
        drink : {
            product : document.getElementById(drinkId).getElementsByTagName("p")[0].innerText,
            value : document.getElementById(drinkId).getElementsByTagName("p")[2].innerText,
        }
        ,
        dessert : {
            product : document.getElementById(dessertId).getElementsByTagName("p")[0].innerText,
            value : document.getElementById(dessertId).getElementsByTagName("p")[2].innerText,
        }
    }
    let sum = Number(order.mainCourse.value.split(" ")[1].replace(/,/g, ".")) + Number(order.drink.value.split(" ")[1].replace(/,/g, ".")) + Number(order.dessert.value.split(" ")[1].replace(/,/g, "."))

    let popUp = document.getElementById("confirm-page")
    popUp.style.visibility="visible"
    let info = popUp.getElementsByTagName("p")
    mainDishes = info[1].innerText=order.mainCourse.product
    info[2].innerText=order.mainCourse.value
    drink = info[3].innerText=order.drink.product
    info[4].innerText=order.drink.value
    dessert = info[5].innerText=order.dessert.product
    info[6].innerText=order.dessert.value
    total = info[8].innerText=`R$ ${sum.toFixed(2)}`
    console.log(info)
}

function cancel(){
    let popUp = document.getElementById("confirm-page")
    popUp.style.visibility="hidden"
}

function sendOrder(){
    let uri = "https://wa.me/5516997871357"
    let orderZap = `Olá, gostaria de fazer o pedido:
    ${mainDishes}
    ${drink}
    ${dessert}
    Total: ${total}\n
    Nome: ${client}
    Endereço: ${address}`

    let encoded = encodeURIComponent(orderZap)
    window.open(`${uri}?text=${encoded}`)
}