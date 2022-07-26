import React from 'react'

import Peliculas from "./Peliculas";
import PageWrapper from "./PageWrapper";
import peliculaJson from "../peliculas.json";
import Paginacion from "./Paginacion";
import { useState } from "react";

const ListadoPeliculas = () => {

    const [paginaActual, setPaginaActual] = useState(1);
    const TOTAL_POR_PAGINA = 7;
  
    let peliculas = peliculaJson;

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


        <Paginacion
          pagina={paginaActual}
          total={getTotalPaginas()}
          onChange={(pagina) => {
            setPaginaActual(pagina);
          }}
        />
      </PageWrapper>
    </div>
  )
}

export default ListadoPeliculas