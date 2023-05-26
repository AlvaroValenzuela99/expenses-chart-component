// const displayExpenses = async (url) => {
//     const response = await fetch(url);
//     const expenses = await response.json();


//     const tabla = document.querySelector(".spending-chart");

//     //Recorremos el array elemento por elemento
//     expenses.forEach(el => {

//         let dayExpense = document.createElement("div")
//         dayExpense.className = "dayExpense"
//         tabla.appendChild(dayExpense);

//         //Pintamos la barra y le añadimos su clase
//         let bar = document.createElement("div");
//         bar.className = "daily-bar";
//         dayExpense.appendChild(bar);

//         //Pintamos el día de la semana y le añadimos su clase
//         let day = document.createElement("div");
//         day.innerText += el.day;
//         day.className = "day"
//         dayExpense.appendChild(day)

//         let calcHeigth = el.amount * 3
//         bar.style.height = `${calcHeigth}px`
//     });
// }

// displayExpenses('data.json')
fetch("data.json")
.then(data => data.json())
.then(res => {
    const chart = document.querySelector(".spending-chart");

    for(let stat of res){
        const dayExpense = document.createElement("div")
        dayExpense.className = "dayExpense";
        chart.appendChild(dayExpense);

        const expenseLabel = document.createElement("div");
        expenseLabel.className = "expense-label";
        expenseLabel.innerHTML += "$" + stat.amount;
        dayExpense.appendChild(expenseLabel)
        
        //Pintamos la barra y le añadimos su clase
        const bar = document.createElement("div");
        bar.className = "daily-bar";
        dayExpense.appendChild(bar);

        //Pintamos el día de la semana y le añadimos su clase
        const day = document.createElement("div");
        day.innerText += stat.day;
        day.className = "day"
        dayExpense.appendChild(day)

        //Calcular altura de las barras
        const calcHeigth = stat.amount * 3
        bar.style.height = calcHeigth + "px"

        if (calcHeigth > 150){
            bar.classList.add("max")
        }

        bar.addEventListener("mouseover", ()=>{
            expenseLabel.style.visibility = "visible"
        })

        bar.addEventListener("mouseout", ()=>{
            expenseLabel.style.visibility = "hidden"
        })
    }


})
