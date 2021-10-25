import "./App.css";
import Tasks from "./components/Tasks";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import TaskContextProvider from "./context/TasksContext";
import AuthContextProvider from "./context/AuthContext";
import ProtectedRoute from "./route/ProtectedRoute";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
function App() {
  return (
    <AuthContextProvider>
      <TaskContextProvider>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <ProtectedRoute exact path="/" component={Tasks} />
        </Switch>
      </TaskContextProvider>
    </AuthContextProvider>
  );
}

export default App;
