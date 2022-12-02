import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../shared/authSlice";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const reduxData = useSelector((state)=>state.auth);
  let isLoggedIn = reduxData.isLoggedIn;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[cookie, setCookie, removeCookie] = useCookies(['accessToken','id','number']);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">
          MemoPAD
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to={'/'}>
              <span className="nav-link active" aria-current="page" href="#">
                Main Page
              </span>
            </Link>
            </li>
          </ul>
          <li className="nav-item dropdown navbar-nav">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>{ isLoggedIn ? <div className="dropdown-item" onClick={()=>{
                  dispatch(setLogout());
                  removeCookie('accessToken');
                  removeCookie('number');
                  removeCookie('id');
                  navigate('/');
                }}>
                    Logout
                  </div> : 
                  <Link to='/login'>
                  <div className="dropdown-item" href="#">
                    Login
                  </div>
                  </Link>

                }
                  
                </li>
              </ul>
            </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
