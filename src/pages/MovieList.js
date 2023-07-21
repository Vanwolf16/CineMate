import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

export default function MovieList() {

  const [movies,setMovies] = useState([]);

  useEffect( () => {
    async function fetchMovies(){
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=089969fe07c408b75ad164158596950e");
      const data = await response.json();
      setMovies(data.results)
    }
    fetchMovies();
  }, [])

  return (
    <main>
         <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap ">

            {movies.map( (movie) => (
              <Card key={movie.id} movie={movie}/>
            ))}

            

          </div>
         </section>
      
    </main>
  )
}
