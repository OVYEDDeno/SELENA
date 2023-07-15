import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-dark">
          Quietly Leave
        </button>
      </div>
      <h1>Welcome, Person_id!</h1>
      <div class="row justify-content-center d-flex">
        <div class="col">
          <div class="LissaJous">
            <p>LissaJous Curve go here</p>
          </div>
          <p>Current Muse</p>
          <h2>California Breeze - Lil Baby</h2>
        </div>
        <div class="col-4">
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          <div class="Queue">
            <h2>Queue</h2>
            <p class="solid">Lil Top - NBA YoungBoy</p>
            <p class="solid">712PM - Future</p>
            <p class="solid">Dead Trollz - NBA YoungBoy</p>
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-dark">
                Add To Muse
              </button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="Room">
            <h2>Room Name</h2>
            <h2> # of People In Room</h2>
            <p class="solid">Lil Top - NBA YoungBoy</p>
            <p class="solid">712PM - Future</p>
            <p class="solid">Dead Trollz - NBA YoungBoy</p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-dark">
              Connect Your Wallet
              </button>
              
            </div><center><h5>To Create Your Own Room For FREE</h5></center>
    </div>
  );
};
