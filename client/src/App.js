import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import React, { Fragment, useEffect } from "react";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-forms/CreateProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
// import Profile from './components/profile/Profile';
// import Posts from './components/posts/Posts';
// import Post from './components/post/Post';
// import NotFound from './components/layout/NotFound';
// import PrivateRoute from './components/routing/PrivateRoute';
//import { LOGOUT } from './actions/types';

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />

          {/* <Routes> */}
          {/* </Routes> */}
          <section className="container">
            <Alert />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="profiles" element={<Profiles />} />

              <Route
                path="dashboard/*"
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                path="create-profile/*"
                element={<PrivateRoute component={CreateProfile} />}
              />
              <Route
                path="edit-profile/*"
                element={<PrivateRoute component={CreateProfile} />}
              />
              <Route
                path="add-experience"
                element={<PrivateRoute component={AddExperience} />}
              />
              <Route
                path="add-education"
                element={<PrivateRoute component={AddEducation} />}
              />

              {/* <Route path="/dashboard" component={Dashboard} /> */}
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

// const App = () => {
//   return (
//     <div className={stl.container}>
//       <Router>
//         <Header/>
//         <Nav/>
//         <Routes>
//           <Route path='/messages'  element={<Messages/>} />
//           <Route path='/profile' element={<ProfileContent/>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
