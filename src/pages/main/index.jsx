import { Link } from 'react-router-dom';
import '../../styles/Main.css'

const Main = () => {
    return(
        <>
            <div className='background-img'>
                <div className='row'>
                <div className='col-md-6'></div>
                <div className='col-md-6 page-right'>
                <div className='main-margin'>
                <h2 className= 'writing'>Lets note your important:</h2>
                <ul>
                    <li><h4 className='writing green-color'><u>Activity</u></h4></li>
                    <li><h4 className='writing'><u>Routine</u></h4></li>
                    <li><h4 className='writing blue-color'><u>Appoinment</u></h4></li>
                    <li><h4 className='writing yellow-color'><u>Schedule</u></h4></li>
                    <li><h4 className='writing red-color'><u>Quick Note</u></h4></li>
                </ul>
                <div className='writing2 margin-footer'>
                    Start By <Link to={'/login'}>Sign In</Link> or <Link to={'/register'}>Sign Up</Link>
                </div>
                </div>
                
                </div>

                </div>
            </div>
        </>
    )
}

export default Main;