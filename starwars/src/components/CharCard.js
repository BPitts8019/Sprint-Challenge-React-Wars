import React from "react";
import { Collapse, Card, CardHeader, CardImg, CardTitle, CardText, CardBody } from "reactstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
   width: 300px;
   margin-bottom: 2rem;
   box-shadow: 0px 5px 10px 2px #81755c;
`;

const StyledHeader = styled(CardHeader)`
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

export default function CharCard ({character}) {
   return (
      <StyledCard>
         <StyledHeader>
            {
               (character.gender === "male")
               ?  <i className="fas fa-male fa-2x"></i>
               :  (character.gender === "female")
                  ?  <i className="fas fa-female fa-2x"></i>
                  :  <i className="fas fa-user-alt-slash fa-2x"></i>
               }
            {character.name}
         </StyledHeader>

         <CardBody>
            --- Display Stats ---
         </CardBody>
      </StyledCard>
   );
};