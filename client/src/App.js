import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import React, { Fragment } from "react";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <section className="container">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

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
