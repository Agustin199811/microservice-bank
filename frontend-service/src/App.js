import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AccountComponent from "./Components/AccountComponent";
import CustomerComponent from "./Components/CustomerComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<AccountComponent/>}></Route>
            <Route path="/bank/accounts" element={<AccountComponent/>}></Route>
            <Route path="/bank/customers" element={<CustomerComponent/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
