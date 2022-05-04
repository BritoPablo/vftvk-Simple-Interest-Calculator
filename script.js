const form = document.getElementById("form"),
        rate = document.getElementById("rate"),
        principal = document.getElementById("principal"),
        porcentage = document.getElementById("porcentage");

rate.oninput = () => {
    porcentage.textContent = `${rate.value / 10} %`;
}

console.log(isNaN('Hello'));

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const amount = principal.value,
            years = document.getElementById("years").value,
            rateValue = rate.value;
   
    let amountReceive = "",
        yearsFuture = "",
        result = document.getElementById("result");
    
    if( amount <= 0 ){
        alert("You have to introduce a positive number");
        principal.focus();

        //result.innerHTML = "Please you must enter a valid amount";
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
