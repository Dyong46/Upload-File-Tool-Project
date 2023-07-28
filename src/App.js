import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import TableUsers from "./components/tableUsers/TableUsers";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<TableUsers />}></Route>
            <Route path="home" element={<Home />}></Route>
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
