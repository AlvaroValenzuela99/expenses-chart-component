const displayExpenses = async (url) => {
    const response = await fetch(url);
    const expenses = await response.json();


    const tabla = document.querySelector(".spending-chart");

    //Recorremos el array elemento por elemento
    expenses.forEach(el => {

        //Pintamos la barra y le añadimos su clase
        let bar = document.createElement("div");
        bar.className = "daily-bar";
        tabla.appendChild(bar);

        //Pintamos el día de la semana y le añadimos su clase
        let day = document.createElement("div");
        day.innerText += el.day;
        day.className = "day"
        tabla.appendChild(day)
        
    });

}

displayExpenses('data.json')
