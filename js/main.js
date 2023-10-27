fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then((data) => {
        // document.querySelector(".container").insertAdjacentElement("beforeend", `<h1>Tareas cumplidas del Usuario </h1>`);
        const itemsFiltrados = data.filter(item=> item.userId === 5 && item.completed === true);
        
        for (let item of itemsFiltrados) {
            document.getElementById("lista").insertAdjacentHTML("beforeend", `
                <li>
                  Tarea: ${item.title}: <strong>completa</strong>!! 
                </li>
            `);
        }


    });