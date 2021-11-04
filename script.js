let percent = 0;



//INFOS 
function infos(){
    let bill = parseFloat(document.querySelector('#bill').value);
    let people = parseInt(document.querySelector('#count-people').value);
    
    if(people == 0){
        document.querySelector(".error-msg").style.opacity = '1';
        document.querySelector('#count-people').style.outlineColor = 'red';
    } else{
        document.querySelector(".error-msg").style.opacity = '';
        document.querySelector('#count-people').style.outlineColor = '';
    }
    if (bill !== bill){
        bill = 0;
    }

    if (people !== people){
        people = 0;
    }

    return [bill,people]
}

//END INFOS



// BUTTONS
function btn5(){
    percent = 0.05
    calcTip()
    

}
function btn10(){
    percent = 0.10
    calcTip()
    
}
function btn15(){
    percent = 0.15
    calcTip()
    
}
function btn25(){
    percent = 0.25
    calcTip()
    
}
function btn50(){
    percent = 0.5
    calcTip()
    
}
function customBtn(){
    let customPercent = parseFloat(document.querySelector('#custom-btn').value);
    
    if (customPercent !== customPercent){
        customPercent = 0;
    }
    
    percent = customPercent/100;
    calcTip()

}
// END BUTTONS



// CALC function
function calcTip(){

    bill = infos()[0];
    people = infos()[1];
    

    //calc for tip
    const tip = (bill * percent)/people;
    //calc for total
    const total = ((tip*people) + bill)/people;

    document.querySelector('.tip-amount').innerText = `${tip.toFixed(2)}`
    document.querySelector('.total-person').innerText = `${total.toFixed(2)}`


    if (tip !== tip || tip == Infinity){
        document.querySelector(".tip-amount").innerText = `$0.00`; 
    }

    if (total !== total){
        document.querySelector(".total-person").innerText = `$0.00`;
    }

    console.log(tip);

}

//RESET BUTTON
function reset(){
    percent = 0;
    document.querySelector('.tip-amount').innerText = '$0.00';
    document.querySelector('.total-person').innerText = '$0.00';
    document.querySelector('#bill').value = '';
    document.querySelector('#custom-btn').value = '';
    document.querySelector('#count-people').value = '';

}
