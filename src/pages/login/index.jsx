import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../../styles/register.css";
import { useCookies } from "react-cookie";
import { setId, setLogin, setUser } from "../../shared/authSlice";

const Login = () => {
  const [loginForm, setLoginForm] = useState({number: "", password: "" });
  const [cookies, setCookies] = useCookies(["accessToken", "userId", "email"]);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChangeInput = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://to-do-list-be.vercel.app/login", loginForm)
      .then((res) => {
        const { accessToken, id, number} = res.data;
        setCookies("accessToken", accessToken, { maxAge: 3600 });
        setCookies("id", id, { maxAge: 3600 });
        setCookies('number', number, {maxAge: 3600});
        dispatch(setLogin(accessToken));
        dispatch(setId(id));
        dispatch(setUser(number));
        navigate("/dashboard");
      })
      .catch((err) => {
        alert("Login failed, please try again");
      });
  };

  return (
    <div>
      <section className='background-img2'>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-5 col-xl-5">
              <div className="card text-black mb-5 no-border">
                <div className="card-body p-md-5 box-color white-font">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                      <p className="text-center h4 fw-bold mb-1 mx-1 mx-md-4 mt-1 mb-3">
                        Login
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4 mt-5">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="number"
                              name="number"
                              maxLength="4"
                              className="form-control input-form"
                              placeholder="Your Number"
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
                            className="btn btn-md bg-white button-center added-padding"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                      <p className="text-center fw-light mb-3 mx-1 mx-md-4 mt-2 no-decoration">
                        Don't have an account ?&nbsp;
                        <Link to="/register">
                          <b>Register</b>
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

export default Login;