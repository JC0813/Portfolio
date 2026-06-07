window.addEventListener("load", () => {
    //database skills call
    fetch("http://localhost:5000/skills")
        .then(response => response.json())
        .then(data => {

            let html = `<ul>`
            for(let i = 0; i < data.length; i++) {
                html += `<li>${data[i].name} - ${data[i].level}`
            }
            document.getElementById("message").innerHTML = html + `</ul>`;

        })
        .catch(error => {
            console.error("Fout bij ophalen van skill data:", error);
            document.getElementById("message").innerText = "Fout bij laden van gegevens."
        })

        //database prjoecten call
    fetch("http://localhost:5000/projecten")
        .then(response => response.json())
        .then(data => {

            let html = `<ul>`
            for(let i = 0; i < data.length; i++) {
                html += `<li>${data[i].name} - ${data[i].beschrijving} - ${data[i].tags}`
            }
            document.getElementById("message").innerHTML = html + `</ul>`;

        })
        .catch(error => {
            console.error("Fout bij ophalen van skill data:", error);
            document.getElementById("message").innerText = "Fout bij laden van gegevens."
        })
})