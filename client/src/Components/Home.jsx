import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import Paginado from "./Paginado.jsx";
import Loading from "./Loading.jsx";
import NavBar from "./Navbar.jsx";

export default function Home() {
  const dispatch = useDispatch(); //para despachar mis acciones
  const allDogs = useSelector((e) => e.allDogs); // poneme en allDogs todo lo que tengo en el state
  const dogs = useSelector((e) => e.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const dogsPage = 8;
  const indexOfLastDogs = currentPage * dogsPage;
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
                <div>
                  <Link
                    key={e.id}
                    to={"/dogs/" + e.id}
                    style={{ textDecoration: "inherit" }}
                  >
                    <Card
                      key={e.id}
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
        
        <div >
          <Link to="/dog">
            <button id="botonCreate">Create Dogs</button>
          </Link>
        </div>
        <div className="principal">
          <NavBar />
        </div>
        <div>
          {dogs.length > 0 ? mostrarCards(dogs) : mostrarCards(allDogs)}
        </div>
      </div>
    </div>
  );
}