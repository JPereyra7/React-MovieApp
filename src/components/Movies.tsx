import axios from "axios";
import { useEffect, useState } from "react";
import { IMovies } from "../services/Movies";

const Movies = () => {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const baseURL = 'http://medieinstitutet-wie-products.azurewebsites.net/api/products'

  useEffect(() => {
    const getData = async () => {
        try {
            const response = await axios.get<IMovies[]>(baseURL);
            setMovies(response.data);
        } catch (error) {
            console.error("Could not retrieve data", error);
        }
    }
    getData();
  }, []);
  
    return (
    <>
     <ul className="movieContainer">{movies.map((movies, index) => (
        <li key={index}>
              <img className="individualMovieImage" src={movies.imageUrl} alt="" />
            </li>
     ))}</ul>
    </>
  )
}

export default Movies