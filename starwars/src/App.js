import React, { useState, useEffect } from 'react';
import { Collapse, Card, CardHeader, CardImg, CardTitle, CardText, CardBody } from "reactstrap";
import axios from "axios";
import './App.css';

const App = () => {
   // Try to think through what state you'll need for this app before starting. Then build out
   // the state properties here.
   const [characters, setCharacters] = useState();

   // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
   // side effect in a component, you want to think about which state and/or props it should
   // sync up with, if any.
   useEffect(() => {
      console.log("App has started...");

      let promises = [];
      for (let i = 1; i <= 3; i++) {
         promises.push(axios.get(`https://swapi.co/api/people/${i}/`));
      }

      axios.all(promises)
         .then(results => {
            const starWarsChar = [];

            results.forEach(response => {starWarsChar.push(response.data)});
            setCharacters(starWarsChar);
         })
         .catch(error => {
            console.log("There was a problem retrieving the characters from SWAPI.");
            console.error(error);
         });
   }, []);

   return (
      <div className="App">
         <h1 className="Header">React Wars</h1>
         <Card>
            <CardHeader><i className="fas fa-male fa-3x"></i> Luke Skywalker</CardHeader>

            <CardBody>
               It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform powers enterprise-class. Spriti introduced new capabilities of the FirstSpriti Digital Experience Platform. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the customer journey.
         </CardBody>
         </Card>
      </div>
   );
}

export default App;
