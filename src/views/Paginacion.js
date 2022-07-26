import React from 'react'


const Paginacion = (props) => {
    const getPaginas = () => {
        const resultado = [];
        for (let i = 0; i < props.total; i++) {
          let pagina = i + 1;
          resultado.push(
            <a  onClick={() => props.onChange(pagina)}
              className={props.pagina === pagina ? 'active' : ''}>
              {pagina}
            </a>
          );
        }
        return resultado;
      }
  return (
    <div className="topbar-filter">

      <div className="pagination2">
        <span>Página {props.pagina} de {props.total}:</span>

        {getPaginas()}

      </div>
    </div>
  )
}

export default Paginacion


// #dcf836;

// .topbar-filter .pagination2 a {
//   padding-left: 5px;
//   padding-right: 5px;
//   color: #4280bf;


//   topbar-filter .pagination2 a.active, .topbar-filter .pagination2 a:hover {
//     color: #dcf836;
//   }


//   .topbar-filter .pagination2 span, .topbar-filter .pagination2 a {
//     font-family: 'Nunito', sans-serif;
//     font-size: 14px;
//     color: #abb7c4;
//     font-weight: 300;
//     text-transform: none;
//   }