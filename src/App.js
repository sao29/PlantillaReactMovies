
import "./App.css";
import ListadoPeliculas from "./views/ListadoPeliculas";
import {HashRouter, Route, Routes} from 'react-router-dom';
import Blog from "./views/Blog";
import Celebrity from "./views/Celebrity";
import Page404 from "./views/Page404";
import MovieListGrid from "./views/MovieListGrid";
import ComingSoon from './views/ComingSoon'
function App() {

  return (

    <HashRouter>
			<Routes>
				<Route path="/" element={<ListadoPeliculas/>}/>
				<Route path="/blog" element={<Blog/>}/>
        <Route path="/celebrity" element={<Celebrity/>} />
        <Route path="404" element={<Page404/>} />
        <Route path="/movieGrid" element={<MovieListGrid/>} />
        <Route path="/coming" element={<ComingSoon/>}/>
			</Routes>
			{/* Switch fue reemplazado por Routes */}
		</HashRouter>
  );
}

export default App;
