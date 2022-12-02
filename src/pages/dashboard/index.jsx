import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AddModal from "../../Component/Modal";
import { setOpenModal } from "../../shared/authSlice";
import ToDoList from "../../Component/ToDoList";
import '../../styles/dashboard.css'

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxData = useSelector((state) => state.auth);

  useEffect(() => {
    if (!reduxData.isLoggedIn) {
      navigate("/login");
    }
  }, [reduxData.isOpen]);

  return (
    <>
      {/*Main Body*/}
      <section className='background-dashboard'>
      <AddModal />
      <main>
        <div className="row">
          <div className="col-md-6 offset-md-1 mb-4 mt-3 writing2">Hello,{reduxData.number}</div>
          <div className="col-md-2">
            <button
            className='circle-button'
              onClick={() => {
                dispatch(setOpenModal());
              }}
            >+
            </button>
          </div>
        </div>
        <ToDoList />
      </main>
      {/*Main Body*/}
      </section>
    </>
  );
};

export default Dashboard;
