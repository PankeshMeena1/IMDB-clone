import "./App.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/home/Home";
import MovieList from "./Components/movielist/movieList";
import Movie from "./Pages/movieDetail/movie";
const App=()=>
{
    return(
        <>
          <div className="App">
                <BrowserRouter>
                <Header/>
                   <Routes>
                    <Route index element={<Home/>}></Route>
                    <Route path="/movie/:id" element={<Movie/>}></Route>
                    <Route path="/movies/:type" element={<MovieList/>}></Route>
                    <Route path="/*" element={<h1>Error Page</h1>}></Route>
                  
                   </Routes>
                </BrowserRouter>
          </div>
        </>
    );
}
export default App;