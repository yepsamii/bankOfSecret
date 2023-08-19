document.getElementById("btn-deposit").addEventListener("click", function() {
    const depositInput = document.getElementById("deposit").value;
    const newDepositAmount = parseFloat(depositInput);
    const oldDepositAmount = document.getElementById("depoAmount").innerText;
    const totalDepositAmount = parseFloat(oldDepositAmount) + newDepositAmount;
    document.getElementById("depoAmount").innerText = totalDepositAmount;

    const balance = document.getElementById("balance").innerText;
    const totalBalance = parseFloat(balance) + newDepositAmount;
    document.getElementById("balance").innerText = totalBalance;

    document.getElementById("deposit").value = "";
});

document.getElementById("btn-withdraw").addEventListener("click", function() {
    const withdrawInput = document.getElementById("withdraw").value;
    const newWithdrawAmount = parseFloat(withdrawInput);
    const oldWithdrawAmount = document.getElementById("withdrawAmount").innerText;
    const totalWithdrawAmount = parseFloat(oldWithdrawAmount) + newWithdrawAmount;
    document.getElementById("withdrawAmount").innerText = totalWithdrawAmount;

    const balance = document.getElementById("balance").innerText;
    const totalBalance = parseFloat(balance) - newWithdrawAmount;
    document.getElementById("balance").innerText = totalBalance;

    document.getElementById("withdraw").value = "";
});