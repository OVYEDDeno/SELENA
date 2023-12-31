import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <h1>Welcome, No Name!</h1>
      {/* START IN A RANDOM BUT MOST POPULAR REGIONS WITHIN A Formal/Functional/Vernacular 
      https://helpfulprofessor.com/types-of-regions/
      FORMAL: https://helpfulprofessor.com/formal-region-examples/
      FUNCTIONAL: https://helpfulprofessor.com/functional-region-examples/ 
      VERNACULAR: https://helpfulprofessor.com/perceptual-region-examples/
      Room pin are for private rooms and an easy way to aalso find a room*/}
      <div class="row justify-content-center d-flex">
        <div class="col">
          <div class="LissaJous">
            <p>LissaJous Curve go here</p>
          </div>
          <p>Current Muse</p>
          <h2>California Breeze - Lil Baby</h2>
        </div>
        <div class="col-4">
          <div class="Queue">
            <h2>Queue</h2>
            <p class="solid">Lil Top - NBA YoungBoy</p>
            <p class="solid">712PM - Future</p>
            <p class="solid">Dead Trollz - NBA YoungBoy</p>
            <div class="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Add To Muse
              </button>
              <div
                class="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="exampleModalLabel">
                        SELENA
                      </h4>

                      <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-dark">
                          Connect Your Wallet
                        </button>
                      </div>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="formControlInput1" class="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="formControlInput1"
                          placeholder="Name"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="formControlInput2" class="form-label">
                          Room Pin
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="formControlInput2"
                          placeholder="0000"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        // onClick={store.name=input}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="Room">
            <h2>Room Name</h2>
            <h2> # of People In Room</h2>
            <p class="solid">OVYED Deno | Tiktok/IG/Twitter</p>
            <p class="solid">Future</p>
            <p class="solid">NBA YoungBoy</p>
            <div class="d-flex justify-content-end mb-3">
            <button class="btn btn-primary mt-3" type="submit">
              Share This Room
            </button></div>
          </div>          
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          Log In
        </button>
      </div>
      <center>
        <h5>Create Your Own Room For FREE</h5>
      </center>
    </div>
  );
};
