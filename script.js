const form = document.getElementById("form"),
        rate = document.getElementById("rate"),
        porcentage = document.getElementById("porcentage");

rate.oninput = () => {
    porcentage.textContent = `${rate.value / 10} %`;
}

console.log(isNaN('Hello'));

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const amount = document.getElementById("amount").value,
            years = document.getElementById("years").value,
            rateValue = rate.value;
   
    let amountReceive = "",
        yearsFuture = "",
        result = document.getElementById("result");
    
    if(!amount || amount <= 0 || isNaN(amount) ){
        result.innerHTML = "Please you must enter a valid amount";
    } else {
        amountReceive = (rateValue / 1000) * years * amount ;
        yearsFuture = new Date().getFullYear() + parseFloat(years);
        result.innerHTML = `
            If you deposit <span class="yellow">${amount}</span>, <br\>
            at an interest rate of <span class="yellow">${rateValue/10} %</span>.<br\>
            You will receive an amount of <span class="yellow">${amountReceive.toFixed()}</span>,<br\>
            in the year <span class="yellow">${yearsFuture}</span>
        `
    }
    
});
