import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Test from "./pages/Test";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/test" component={Test} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
