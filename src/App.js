import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Login from './Login';
import logo2 from './logo2.png';
import Spinner from 'react-spinkit'
import Weather from './Weather';
import CalendarContainer from './CalendarContainer';
import Movies from './Movies';
import MoviePicked from './MoviePicked';
import News from './News';


function App() {

  const [user, loading] = useAuthState(auth);
  // const {state} = useLocation();
  // const {test} = useParams();
  // console.log(test,state);

  if (loading) {
    return (
      <div className="appLoading">
        <div className="appLoadingContents">
          <img src={logo2} alt="" />
          <Spinner name='ball-spin-fade-loader' color='purple' fadeIn='none' />
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* router */}
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <Switch>
              <Route path='/' exact>
                <div className="sidebar__chat">
                  <Sidebar />
                  <Chat />
                </div>

              </Route>
              {/* <Route path='/calendar' component={calendar} /> */}
              <Route path='/calendar'>
                <div className="calendarComponent">
                  <CalendarContainer />
                </div>
              </Route>
              {/* <Route path='/shop' component={shop} /> */}
              <Route path='/weather'>
                <div className="weatherComponent">
                  <Weather />
                </div>
              </Route>

              <Route path='/movies'>
                <div className="movieComponent">
                  <Movies />
                </div>
              </Route>


              {/* <Route path='/settings' component={settings} /> */}
            </Switch>
            {/* </div> */}

              <Route path='/moviePicked'>
                <div className="moviePickedComponent">
                  <MoviePicked />              
                </div>
              </Route>

              <Route path='/music'>
                <div className="">
                  <h5>music</h5>              
                </div>
              </Route>

              <Route path='/news'>
                <div className="newsComponent">
                  <News />              
                </div>
              </Route>
          </>
        )}
      </Router>
      {/* router */}
    </div>
  );
}

export default App;
