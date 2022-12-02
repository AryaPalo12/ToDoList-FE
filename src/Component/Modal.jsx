import React, { useEffect, useState } from "react";
import { setCloseModal, setOpenModal } from "../shared/authSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/modal.css";
import axios from "axios";

const AddModal = (props) => {
  const dispatch = useDispatch();
  const stateModal = useSelector((state) => state.auth);
  const [texts, setTexts] = useState({});

  useEffect(() => {
    setTexts({ ...texts, user_id: stateModal.user_id });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setTexts({ ...texts, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://to-do-list-be.vercel.app//dashboard/lists/", texts)
      .then((res) => {
        dispatch(setCloseModal());
      })
      .catch((err) => {
        console.log(err);
        alert("Error while posting list.");
      });
  };

  return (
    <>
      {stateModal.isOpen ? (
        <main className="pt-4 pb-3 background-note">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="offset-md-1 col-md-2 writing2">Your Note: </div>
                <input
                  className="col-md-4 writing3"
                  type="text"
                  name="texts"
                  maxLength="75"
                  onChange={handleChange}
                ></input>
                <button
                  className="btn btn-success col-md-1 offset-md-1"
                  color="success"
                  onClick={handleSubmit}
                >
                  Add
                </button>
                <button
                  className=" offset-md-1 col-md-1 btn btn-danger"
                  style={{ color: "white" }}
                  type="button"
                  onClick={() => {
                    dispatch(setCloseModal());
                  }}
                >
                  Cancel
                </button>
              </div>
              <div className=" modal-footer"></div>
            </form>
          </div>
        </main>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddModal;
