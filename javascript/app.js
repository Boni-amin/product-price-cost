let isCouponCodeApplied = false;
function getMemoryNumber(memoryCost, number){
    const totalNumberText = document.getElementById(memoryCost);
    totalNumberText.innerText = number;
}
// get inner text 
function getTotalInnerText(inputText){
    const bestNumber = document.getElementById(inputText);
    const bestNumberValue = Number(bestNumber.innerText);
    return bestNumberValue;
}
// Total price Function 
function getTotalPrice(){
    const bestNumberValue = getTotalInnerText('best-number');
    const memoryNumberValue = getTotalInnerText('memory-number');
    const storngNumberValue = getTotalInnerText('storng-number');
    const delivaryNumberValue = getTotalInnerText('delivary-number');

    const totalValue = bestNumberValue +memoryNumberValue + storngNumberValue + delivaryNumberValue;

    const totalNumber = document.getElementById('total-number');
    const finalTotal = document.getElementById('final-total-number');
    totalNumber.innerText = totalValue;
    finalTotal.innerText = totalValue;
}

// Memory button handle 
document.getElementById('memory-button1').addEventListener('click', function(){
    getMemoryNumber('memory-number', 0);
    // Total price 
    getTotalPrice()
})
document.getElementById('memory-button2').addEventListener('click', function(){
    getMemoryNumber('memory-number', 180);
    // Total price
    getTotalPrice();

});
// Strong button handle 
document.getElementById('strong-button1').addEventListener('click', function(){
    getMemoryNumber('storng-number', 0);
    // Total price
    getTotalPrice();
});
document.getElementById('strong-button2').addEventListener('click', function(){
    getMemoryNumber('storng-number', 100);
    // Total price
    getTotalPrice();
});
document.getElementById('strong-button3').addEventListener('click', function(){
    getMemoryNumber('storng-number', 180);
    // Total price
    getTotalPrice();
});
//  Delivary option  handle 
document.getElementById('delivary-button1').addEventListener('click', function(){
    getMemoryNumber('delivary-number', 0);
    // Total price
    getTotalPrice();
});
document.getElementById('delivary-button2').addEventListener('click', function(){
    getMemoryNumber('delivary-number', 20);
    // Total price
    getTotalPrice();
});
// Apply button handle 
document.getElementById('apply-button').addEventListener('click', function(){
    const finalBalance =  document.getElementById('final-total-number');
    const finalBalanceValue = finalBalance.innerText;
    const cuponInput = document.getElementById('cupon-input');
    const cuponInputValue = cuponInput.value;
    const cupon = finalBalanceValue * 20 / 100;
    
    if (cuponInputValue == 'stevekaku') {
        if(!isCouponCodeApplied){
            const totalBalance = finalBalanceValue - cupon;
            finalBalance.innerText = totalBalance;
            isCouponCodeApplied = true;
        } 
    }
    cuponInput.value = '';
});