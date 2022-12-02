import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../../styles/register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://comfy-peony-92c203.netlify.app/registration", formData)
      .then((res) => {
        alert("Registration success!");
        navigate("/login");
      })
      .catch((err) => alert("Registration failed, please try again"));
  };

  return (
    <div>
      <section className="background-img2">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-5 col-xl-5">
              <div className="card text-black no-border">
                <div className="card-body p-md-5 box-color white-font">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                      <p className="text-center h4 fw-bold mb-1 mx-1 mx-md-4 mt-1 mb-2">
                        Register
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0 mt-5">
                            <input
                              type="tex"
                              id="number"
                              name="number"
                              minLength="4"
                              maxLength='4'
                              className="form-control input-form"
                              placeholder="Four Digits Number"
                              onChange={handleChangeInput}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control input-form"
                              placeholder="Password"
                              onChange={handleChangeInput}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4 mt-5">
                          <button
                            className="btn btn-md bg-white button-center"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Create Now
                          </button>
                        </div>
                      </form>
                      <p className="text-center fw-light mb-3 mx-1 mx-md-4 mt-2 no-decoration">
                        Already have an account ?&nbsp;
                        <Link to="/login">
                          <b>Login</b>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
