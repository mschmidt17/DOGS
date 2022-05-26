import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import Paginado from "./Paginado.jsx";
import Loading from "./Loading.jsx";
import NavBar from "./Navbar.jsx";
import "../CSS/Home.css";
import casa from "../Imagen/Home.png";


export default function Home() {
  const dispatch = useDispatch(); 
  const allDogs = useSelector((e) => e.allDogs); 
  const dogs = useSelector((e) => e.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const dogsPage = 8;
  const indexOfLastDogs = currentPage * dogsPage;            //currentpage = pagina actual
  const indexOfFirstDogs = indexOfLastDogs - dogsPage;       

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [dispatch]);

  const mostrarCards = (dogs) => {
    const currentDogs = dogs.slice(indexOfFirstDogs, indexOfLastDogs);
    return (
      <div>
        <div className="paginado2">
          {currentDogs.length === 0 && currentDogs ? (
            <Loading />
          ) : (
            currentDogs.map((e) => {
              return (
                <div key={e.id}>
                  <Link
                    to={"/dogs/" + e.id}
                    style={{ textDecoration: "inherit" }}
                  >
                    <Card
                      name={e.name}
                      image={e.image}
                      temperament={e.temperament}
                      weight={e.weight}
                    />
                  </Link>
                </div>
              );
            })
          )}
        </div>
        
          <Paginado
            dogsPage={dogsPage}
            allDogs={dogs.length}
            paginado={paginado}
          />
       
      </div>
    );
  };

  return (
    <div>
      <div>
        
        <div className="HeaderHome" >
          <Link to="/dog">
            <button id="botonCreate">Create Dog</button>
          </Link>
          <Link to = "/">
            <img src={casa} width="60" height="60" alt='' className='casa'/>
          </Link>     
        </div>

        <NavBar />
        <div>
          {dogs.length > 0 ? mostrarCards(dogs) : mostrarCards(allDogs)}
        </div>
      </div>
    </div>
  );
}