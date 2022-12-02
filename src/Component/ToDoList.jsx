import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "../styles/todolist.css";

const ToDoList = (props) => {
  const [toDo, setToDo] = useState([]);
  const reduxData = useSelector((state) => state.auth);
  const [cookies, setCookies] = useCookies(['number'])

  useEffect(() => {
    if (reduxData.isLoggedIn) {
      fetchData();
    }
  }, [reduxData.isOpen]);

  const fetchData = () => {
    axios
      .get(`http://localhost:4000/dashboard/`, { params: { user_id: cookies.id } })
      .then((res) => {
        setToDo(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong when fetching data.");
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const confrim = window.confirm("Are you sure to delete this entry?");
    if (confrim) {
      axios
        .delete(`https://to-do-list-be.vercel.app/dashboard/lists/${e.currentTarget.value}`,)
        .then((res) => {
          fetchData();
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong while deleting your entry.");
        });
    }
  };

  return (
    <>
      <div class="sizing ">
        <div className="row">
          {toDo.map((item) => {
            return (
              <>
                <div className="writing4 background-memo col-md-3">
                  <div className="memo-margin mt-4">{item.texts}</div>{" "}
                  <button key={item.id} value={item.id} className="btn" onClick={handleDelete}>
                    <i className="fa fa-trash" aria-hidden="true" value={item.id}></i>
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ToDoList;
