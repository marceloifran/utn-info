
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
        <div class="card-group">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">${materia}</h5>
            <h6 class="card-subtitle mb-2 text-muted">3 Cuatrimestre</h6>
            <p class="card-text">LINK ZOOM:</p>
            <p class="card-text">ID de reunión: ${id}</p>
            <p class="card-text"> Código de acceso: ${clave}</p>
            <p class="card-text">PARCIALES:</p>
            <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header text-center" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                 ${primerp}
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  ${infoPrimer}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                 ${segundop}
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                 ${infoSegundo}
                </div>
              </div>
            </div>
          </div>
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