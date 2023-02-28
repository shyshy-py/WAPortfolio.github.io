// Obtener el elemento del botón de hamburguesa y el menú
var navbarToggler = document.querySelector(".navbar-toggler");
var navbarMenu = document.querySelector(".navbar-collapse");
window.addEventListener("click", function (event) {
  // Si se hace clic en cualquier lugar fuera del menú y del botón de hamburguesa, cerrar el menú
  if (
    event.target !== navbarToggler &&
    event.target.closest(".navbar-collapse") !== navbarMenu
  ) {
    navbarToggler.classList.remove("show");
    navbarMenu.classList.remove("show");
    document.getElementById("destroy").style.display ="none";
  }
});

function renderContent(path) {
  switch (path) {
    case "/about":
      contentDiv.innerHTML = ` <div class="fade-in container d-flex justify-content-center align-items-center">
        <div class="row">
          <div class="col-md-6">
            <h2>Wladimir Acevedo Norambuena</h2>
            <p>Analista Programador titulado en Duoc Uc, CL.</p>
            <br>
            <p>Soy una persona proactiva y muy autodidacta, siempre buscando maneras de adquirir conocimientos de mi interés</p>
            <p>Mi framework favorito es angular, poseo habilidades en el desarrollo front-end pero mi interés en este momento está más enfocado en el desarrollo back-end, por lo que mi meta es lograr ser un desarrollador competente en ambas áreas </p>
            <p> </p>
            <p>Conocimiento de tecnologias para el desarrollo así como metodologias agiles, capacidad de gestión y toma de requisitos </p>
            <img src="" alt="">
          </div>
          <h1>Skills</h1>
          <div class="col-md-8 d-flex flex-wrap">
          
            <div class="image-container">
              <img src="/WAPortfolio.github.io/media/ico/html.png" class="img-fluid" alt="Imagen">
             
            </div>
            <div class="image-container">
              <img src="/WAPortfolio.github.io/media/ico/css.png" class="img-fluid" alt="Imagen">
              
            </div>
            <div class="image-container">
              <img src="/WAPortfolio.github.io/media/ico/js.png" class="img-fluid" alt="Imagen">
            
            </div>
            <div class="image-container">
              <img src="/WAPortfolio.github.io/media/ico/angular.png" class="img-fluid" alt="Imagen">
            
            </div>
            <div class="image-container">
              <img src="/WAPortfolio.github.io/media/ico/django.png" class="img-fluid" alt="Imagen">
             
            </div>
            <div class="image-container">
              <img src="/WAPortfolio.github.io/media/ico/sqlite.png" class="img-fluid" alt="Imagen">
             
            </div>
            <div class="image-container">
              <img src="/WAPortfolio.github.io/media/ico/python.png" class="img-fluid" alt="Imagen">
             
            </div>
            <div class="image-container">
              <img src="/WAPortfolio.github.io/media/ico/plsql.png" class="img-fluid" alt="Imagen">
             
            </div>
            <div class="image-container">
              <img src="/WAPortfolio.github.io/media/ico/git.png" class="img-fluid" alt="Imagen">
             
            </div>
            <div class="image-container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" class="img-fluid" alt="Imagen">
             
            </div>
          </div>
        </div>
      </div>`;
      break;
    case "/project":
      contentDiv.innerHTML = ` 

        <div
            id="carouselExampleRide"
            class="carousel slide fade-in"
            data-bs-ride="true"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div
                  class="d-flex flex-wrap justify-content-center align-items-center"
                >
                  <img
                    src="/WAPortfolio.github.io/media/pokeapp.JPG"
                    class="d-block w-100 img-fluid"
                    alt="..."
                  />
                  <div class="ms-md-3 mt-3 mt-md-0 order-md-2">
                    <h3>PokeApp</h3>
                    <p>
                      Aplicación web en la cual se muestran distintos tipos de
                      información sobre los pokemones consultados.
                    </p>
                    <p>
                      Se utilizó Angular15 para el desarrollo y bootstrap para los
                      componentes y estilos.
                    </p>
                    <p>
                      PokeApi para el consumo de datos a través de peticiones http y
                      firebase para el host
                    </p>
                    <a
                      class="btn btn-secondary"
                      href="https://pokeapp-angular.web.app"
                      >Demo</a
                    >
                    <a
                      class="btn btn-secondary"
                      href="https://github.com/shyshy-py/pokeapp-angular"
                      >Repo</a
                    >
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div
                  class="d-flex flex-wrap justify-content-center align-items-center"
                >
                  <img
                    src="/WAPortfolio.github.io/media/ffe804f3b2aa473e085c0532d8b56954.gif"
                    class="d-block w-100 img-fluid"
                    alt="..."
                  />
                  <div class="ms-md-3 mt-3 mt-md-0 order-md-2">
                    <h3>NotCrunchy</h3>
                    <p>
                      App Móvil simulación de la plataforma Crunchyroll en la cuál se
                      puede ver streaming de series y peliculas de anime
                    </p>
                    <p>
                      Se utilizó Ionic y Angular para el desarrollo de la app. Los
                      datos e información estan extraidas de gogoanimeApi a través de
                      peticiones http
                    </p>
                    <p>
                      *Actualmente en desarrollo (Se implementará un backend para
                      usuarios puedan obtener una experiencia mas personalizada y
                      permitir nuevas funciones)
                    </p>
                    <a class="btn btn-secondary" >Demo no disponible</a>
                    <a
                      class="btn btn-secondary"
                      href="https://github.com/shyshy-py/NotCrunchy"
                      >Repo</a
                    >
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div
                  class="d-flex flex-wrap justify-content-center align-items-center"
                >
                  <img
                    src="/WAPortfolio.github.io/media/ffe804f3b2aa473e085c0532d8b56954.gif"
                    class="d-block w-100 img-fluid"
                    alt="..."
                  />
                  <div class="ms-md-3 mt-3 mt-md-0 order-md-2">
                    <h3>Portafolio Profesional</h3>
                    <p>
                      Desarrollado con HTML,CSS y JS puro 
                    </p>
                    <p>
                      Simulación de SPA con js puro, hosteadoen github pages para una mayor facilidad a la hora de realizar constantes
                    </p>
                  
                    <a
                      class="btn btn-secondary"
                      href="https://github.com/shyshy-py/WAPortfolio.github.io"
                      >Repo</a
                    >
                  </div>
                </div>
              </div>
            </div>
      
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>`;
      break;
    case "/contact":
      contentDiv.innerHTML = `<div class="container my-5">
        <h3 class="text-center mb-4">Formulario de Contacto</h3>
  
        <form action="https://formspree.io/f/xvonrzzk" method="POST">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              class="form-control text-white bg-black"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="correo">Correo Electrónico:</label>
            <input
              type="email"
              name="correo"
              id="correo"
              class="form-control text-white bg-black"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="mensaje">Mensaje:</label>
            <textarea
              name="mensaje"
              id="mensaje"
              rows="5"
              class="form-control text-white bg-black"
              required
            ></textarea>
          </div>
  
          <button type="submit" class="btn btn-light">Enviar</button>
        </form>
      </div>`;
      break;
  }
}

function handleRouting() {
  const path = window.location.hash.substring(1);
  renderContent(path);
}

window.addEventListener("hashchange", handleRouting);
handleRouting();
