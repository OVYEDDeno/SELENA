import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <h1>Welcome, Person_id!</h1>
      <div class="row justify-content-end">
        <div class="col-3">
          <div class="card">
            <h2>Queue</h2>
            <p class="solid">Lil Top - NBA YoungBoy</p>
            <p class="solid">712PM - Future</p>
            <p class="solid">Dead Trollz - NBA YoungBoy</p>
          </div>
        </div>
        <div class="col-2">
          <div class="card2">
            <h2>Room Name</h2>
            <h2> # of People In Room</h2>
            <p class="solid">Lil Top - NBA YoungBoy</p>
            <p class="solid">712PM - Future</p>
            <p class="solid">Dead Trollz - NBA YoungBoy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
