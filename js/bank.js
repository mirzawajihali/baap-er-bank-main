document.getElementById("deposit-button").addEventListener("click", function () {
    const depositeInput = document.getElementById("deposit-input");
    const depositeAmmountText = depositeInput.value;
    const depositeAmmount = parseFloat(depositeAmmountText);


    const depositeTotal = document.getElementById("deposit-total");
    const depositeTotalText = depositeTotal.innerText;
    const depositeTotalNum = parseFloat(depositeTotalText);
    depositeTotal.innerText = depositeTotalNum + depositeAmmount;

    const balanceTotal = document.getElementById('balance-total');
    const balanceAmmountText = balanceTotal.innerText;
    const balanceAmmount = parseFloat(balanceAmmountText);
    balanceTotal.innerText = depositeAmmount + balanceAmmount;

    depositeInput.value = "";



})

document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmmountText = withdrawInput.value
    const withdrawAmmount = parseFloat(withdrawAmmountText);

    const withdrawTotal = document.getElementById("withdraw-total")
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalNum = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalNum + withdrawAmmount;

    const balanceTotal = document.getElementById('balance-total')
    const balanceAmmountText = balanceTotal.innerText;
    const balanceAmmount = parseFloat(balanceAmmountText);

    balanceTotal.innerText = balanceAmmount - withdrawAmmount;
    withdrawInput.value = "";


})