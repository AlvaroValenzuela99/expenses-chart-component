const displayExpenses = async (url) => {
    const response = await fetch(url);
    const expenses = await response.json();

    const tabla = document.querySelector(".spending-chart");
    tabla.innerHTML = "Hola"

    expenses.forEach(el => {
        console.log(el)
        tabla.a
        
    });

}

displayExpenses('data.json')
