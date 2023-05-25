const displayExpenses = async (url) => {
    const response = await fetch(url);
    const expenses = await response.json();


    const tabla = document.querySelector(".spending-chart");

    //Recorremos el array elemento por elemento
    expenses.forEach(el => {

        let dayExpense = document.createElement("div")
        dayExpense.className = "dayExpense"
        tabla.appendChild(dayExpense);

        //Pintamos la barra y le añadimos su clase
        let bar = document.createElement("div");
        bar.className = "daily-bar";
        dayExpense.appendChild(bar);

        //Pintamos el día de la semana y le añadimos su clase
        let day = document.createElement("div");
        day.innerText += el.day;
        day.className = "day"
        dayExpense.appendChild(day)

        let calcHeigth = el.amount * 3
        bar.style.height = `${calcHeigth}px`
    });
}

displayExpenses('data.json')
