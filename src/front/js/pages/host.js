import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default function Host() {

  return (
    <div className="mt-5">
      <div class="d-flex justify-content-end">              
              <button
                type="button"
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#profileModal"
              >
                Edit Profile
              </button>
              <div
                class="modal fade"
                id="profileModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="formControlInput1" class="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="formControlInput2"
                          placeholder="Name"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="formControlInput1" class="form-label">
                          City and State
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="formControlInput2"
                          placeholder="Miami, FL"
                        />
                      </div>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Save
                      </button>
                    </div>
                    {/* REMEMBER TO FIX CLOSE BUTTON TO FIX REQUEST FUCTION ON BACK END */}
                  </div>
                </div>
              </div>
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
          <div class="Queue">
            <h2>YOUR REWARDS</h2>
            <h5 class="solid">Balance: $5050</h5>
            <h5 class="solid">Amount Earned: $5000</h5>
            <h5 class="solid">Staked: $50</h5>
            <div class="d-flex justify-content-end">              
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Withdraw
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
                          Enter Your Wallet Address
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="formControlInput1"
                          placeholder="Wallet Address"
                        />
                      </div>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Send
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
            <h2>POPULAR ROOMS</h2>
            <h2> # of Room Available</h2>
            <h5 class="solid">Nostalgia | 51</h5>
            <h5 class="solid">Glamorous | 34</h5>
            <h5 class="solid">Heaven | 17</h5>
            <div class="d-flex justify-content-end mb-3">
              <Link
              to={"/room/"+store.room_uuid}
              onClick={actions.createRoom}
                type="1"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#createARoom"
              >
                Create A Room
              </Link>
              <div
                class="modal fade"
                id="createARoom"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="formControlInput1" class="form-label">
                          Create A Room
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="formControlInput1"
                          placeholder="Name Of Room"
                        />
                      </div>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Generate
                      </button>
                    </div>
                    {/* REMEMBER TO FIX CLOSE BUTTON TO FIX REQUEST FUCTION ON BACK END */}
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end"><input
              class="form-control"
              type="search"
              id="formControlInput1"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-primary" type="submit">
              Search
            </button></div>
            <div class="d-flex justify-content-end mb-3">
            <button class="btn btn-primary mt-3" type="submit">
              Invite Friend
            </button></div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <a
          class="btn btn-primary"
          // data-bs-toggle="modal"
          // data-bs-target="#exampleModal1"
          href="https://3000-aqua-constrictor-ck9kg7pshi1.ws-us102.gitpod.io"
        >
          Disconnect
        </a>
      </div>
    </div>
  );
}
