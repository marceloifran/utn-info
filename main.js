
const card = document.getElementById('container')
const api = async () => {
    try {
        const res = await fetch('https://api-info-facultad-default-rtdb.firebaseio.com/Materias.json')
console.log (res);

if (res.status === 200){
    const datos = await res.json();
    console.log(datos);

    for (const i in datos){
        console.log(datos[i])
        const {email1, email2,id,clave,materia,profe1,profe2,primerp,segundop,infoPrimer,infoSegundo} = datos[i]
        card.innerHTML  += `
        <div class="card-group card text-dark bg-info mb-3">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">${materia}</h5>
            <h6 class="card-subtitle mb-2 text-muted">3 Cuatrimestre</h6>
            <p class="card-text">LINK ZOOM:</p>
            <p class="card-text">ID de reunión: ${id}</p>
            <p class="card-text"> Código de acceso: ${clave}</p>
            <p class="card-text">PARCIALES:</p>
            <p class="card-text"> ${primerp}</p><p class="card-text">${infoPrimer}</p>
           
            <p class="card-text"> ${segundop}</p>
            <p class="card-text">${infoSegundo}</p>
            <a href="mailto:${email1}" class="btn btn-outline-primary">Profe ${profe1}</a>
            <a href="mailto:${email2}" class="btn btn-outline-primary">Profe ${profe2}</a>
          </div>
         
      </div>
        `
        
    }
    
}
    }
    catch (err) {
        console.log(err);
    }
}

api();