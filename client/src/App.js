import { BrowserRouter, Route } from "react-router-dom";
import { NavBar, MachineList, MachineInfo } from "./components";

function App() {
  <BrowserRouter>
    <Route path="/" component={NavBar} />
    <Route path="/machines?search=" component={MachineList} />
    <Route path="/machines/:id" component={MachineInfo} />
  </BrowserRouter>;
}

export default App;
