import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import SignIn from "./components/Signup/SignIn";
import Todo from "./components/Todo/Todo";
import { useDispatch } from "react-redux";
import { authActions } from "./store";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = sessionStorage.getItem("id");

    if (id) {
      dispatch(authActions.login());
    }
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
