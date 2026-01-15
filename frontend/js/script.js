window.addEventListener('load', async () =>{

    const projects = await fetch(`http://localhost:5000/projects`)
    const projectdata = await projects.json();

    document.getElementById('message').innerHTML = '';

    for(let i = 0; i < projectdata.length; i++) {
        let el = projectdata[i];
        let html = `<p>${el.name}</p>`;
        document.getElementById('message').innerHTML += html;
    };
})