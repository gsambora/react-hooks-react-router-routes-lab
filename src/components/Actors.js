import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor =>
        <div key={actor.name}>
          <h3>{actor.name}</h3>
          {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
        </div>
        )}
    </div> )
}

export default Actors;
