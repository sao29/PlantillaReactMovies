
import "./App.css";
import Peliculas from "./Peliculas";
import PageWrapper from "./PageWrapper";
import peliculaJson from "./peliculas.json";
import Paginacion from "./Paginacion";
import { useState } from "react";
function App() {
  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7;

  let peliculas = peliculaJson;

  // const cargarPeliculas = () => {
  //   peliculas = peliculas.slice(
  //     (paginaActual - 1) * TOTAL_POR_PAGINA,
  //     paginaActual * TOTAL_POR_PAGINA
  //   );
  // }

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculaJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }
  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  );
  return (
    <div>
      <PageWrapper>
        {/* <pelicula 1> */}

        {/* {peliculas.map((pelis) => (
          <PageWrapper
            titulo={pelis.titulo}
            year={pelis.year}
            calificaion={pelis.calificaion}
            director={pelis.director}
            fecha={pelis.fecha}
            duracion={pelis.duracion}
            actores={pelis.actores}
            img={pelis.img}
            descripcion={pelis.descripcion}
          ></PageWrapper>
        ))} */}

        {peliculasPorPagina.map((pelicula) => (
          <Peliculas
            titulo={pelicula.titulo}
            calificacion={pelicula.calificacion}
            director={pelicula.director}
            actores={pelicula.actores}
            fecha={pelicula.fecha}
            duracion={pelicula.duracion}
            img={pelicula.img}
          >
            {pelicula.descripcion}
          </Peliculas>
        ))}

        {/* <Peliculas
          titulo="oblivion"
          year="2012"
          calificaion="8.1"
          director="Joss Whedon"
          fecha="1 May 2015"
          duracion="2h 21m"
          actores="Robert Downey Jr ,Chris Evans,Chris Hemsworth"
          img="images/uploads/mv1.jpg"
        >
          Earth's mightiest heroes must come together and learn to fight as a
          team if they are to stop the mischievous Loki and his alien army from
          enslaving humanity...
        </Peliculas>
        {/* Pelicula 2 */}
        {/* <Peliculas
          titulo=" into the wild"
          year="2014"
          calificaion="7.8"
          director="Anthony Russo ,Joe Russo"
          fecha="1 May 2015"
          duracion="2h 21m"
          actores="Chris Evans,
          Samuel L. Jackson,
          Scarlett Johansson"
            img="images/uploads/mv2.jpg"
        >
          As Steve Rogers struggles to embrace his role in the modern world, he
          teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to
          battle a new threat...
        </Peliculas> */}

        <Paginacion
          pagina={paginaActual}
          total={getTotalPaginas()}
          onChange={(pagina) => {
            setPaginaActual(pagina);
          }}
        />
      </PageWrapper>
    </div>
  );
}

export default App;
