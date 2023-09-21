import { Login } from "./component/Login"
import { Home } from "./component/Home"

function App() {
  return (
    window.location.pathname == "/" ? <Login /> : <Home />
  );
}

export default App;


