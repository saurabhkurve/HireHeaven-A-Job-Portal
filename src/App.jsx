import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import Error404 from "./components/Error404";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute  Component={Home}/> }></Route>
      <Route path="/jobs" element={<ProtectedRoute Component={Jobs}/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/*" element={<Error404 />}></Route>
    </Routes>
  );
};

export default App;
