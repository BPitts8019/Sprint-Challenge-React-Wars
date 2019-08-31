import React from "react";
import { Collapse, Card, CardHeader, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

export default function CharCard ({character}) {
   return (
      <Card>
         <CardHeader>
            {
               (character.gender === "male")
               ?  <i className="fas fa-male fa-3x"></i>
               :  <i className="fas fa-female fa-3x"></i>
            }
            {character.name}
         </CardHeader>

         <CardBody>
            It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform powers enterprise-class. Spriti introduced new capabilities of the FirstSpriti Digital Experience Platform. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the customer journey.
         </CardBody>
      </Card>
   );
};