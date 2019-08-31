import React, { useState, useEffect } from 'react';
import {Spinner} from "reactstrap";
import axios from "axios";
import './App.css';
import CharCard from './components/CharCard.js';

const App = () => {
   // Try to think through what state you'll need for this app before starting. Then build out
   // the state properties here.
   const [characters, setCharacters] = useState();

   // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
   // side effect in a component, you want to think about which state and/or props it should
   // sync up with, if any.
   useEffect(() => {
      console.log("App has started...");

      // let promises = [];
      // for (let i = 1; i <= 3; i++) {
      //    promises.push(axios.get(`https://swapi.co/api/people/${i}/`));
      // }

      // axios.all(promises)
      //    .then(results => {
      //       const starWarsChar = [];

      //       results.forEach(response => {starWarsChar.push(response.data)});
      //       console.log(JSON.stringify(starWarsChar, null, 3));
      //       // setCharacters(starWarsChar);
      //    })
      //    .catch(error => {
      //       console.log("There was a problem retrieving the characters from SWAPI.");
      //       console.error(error);
      //    });

      setCharacters([
         {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
               "https://swapi.co/api/films/2/",
               "https://swapi.co/api/films/6/",
               "https://swapi.co/api/films/3/",
               "https://swapi.co/api/films/1/",
               "https://swapi.co/api/films/7/"
            ],
            "species": [
               "https://swapi.co/api/species/1/"
            ],
            "vehicles": [
               "https://swapi.co/api/vehicles/14/",
               "https://swapi.co/api/vehicles/30/"
            ],
            "starships": [
               "https://swapi.co/api/starships/12/",
               "https://swapi.co/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.co/api/people/1/"
         },
         {
            "name": "C-3PO",
            "height": "167",
            "mass": "75",
            "hair_color": "n/a",
            "skin_color": "gold",
            "eye_color": "yellow",
            "birth_year": "112BBY",
            "gender": "n/a",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
               "https://swapi.co/api/films/2/",
               "https://swapi.co/api/films/5/",
               "https://swapi.co/api/films/4/",
               "https://swapi.co/api/films/6/",
               "https://swapi.co/api/films/3/",
               "https://swapi.co/api/films/1/"
            ],
            "species": [
               "https://swapi.co/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:10:51.357000Z",
            "edited": "2014-12-20T21:17:50.309000Z",
            "url": "https://swapi.co/api/people/2/"
         },
         {
            "name": "R2-D2",
            "height": "96",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, blue",
            "eye_color": "red",
            "birth_year": "33BBY",
            "gender": "n/a",
            "homeworld": "https://swapi.co/api/planets/8/",
            "films": [
               "https://swapi.co/api/films/2/",
               "https://swapi.co/api/films/5/",
               "https://swapi.co/api/films/4/",
               "https://swapi.co/api/films/6/",
               "https://swapi.co/api/films/3/",
               "https://swapi.co/api/films/1/",
               "https://swapi.co/api/films/7/"
            ],
            "species": [
               "https://swapi.co/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:11:50.376000Z",
            "edited": "2014-12-20T21:17:50.311000Z",
            "url": "https://swapi.co/api/people/3/"
         }
      ]);
   }, []);

   if (characters) console.log(characters);
   return (
      <div className="App">
         <h1 className="Header">React Wars</h1>
         {
            (characters)
            ?  <CharCard character={characters[0]} />
            :  <div className="loading">
                  <Spinner type="grow" color="secondary" />
               </div>
         }
      </div>
   );
}

export default App;
