import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Room=()=> {
  const { store, actions } = useContext(Context);
  console.log(store.users,)
  return (
    <div className="mt-5">
      <div class="d-flex justify-content-end">
        <a href="https://3000-aqua-constrictor-ck9kg7pshi1.ws-us102.gitpod.io/" type="button" class="btn btn-dark">
          Quietly Leave
        </a>
      </div>
      {/* if(
        store.token !=null
      ){
        Welcome, {
        store.name
        }, else {
          "Welcome!"
        }
      } */}
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
                data-bs-target="#exampleModal"
              >
                Add To Muse
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="formControlInput1" class="form-label">
                          Request A Song
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="formControlInput1"
                          placeholder="Name Of Song"
                        />
                      </div>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Request
                      </button>
                    </div>
                    {/* REMEMBER TO FIX CLOSE BUTTON TO FIX REQUEST FUCTION ON BACK END */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="Room">
            <h2>Room Name</h2>
            <h2> 3 People In Room</h2>
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
    </div>
  );
};
