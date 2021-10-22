import "./App.css";
import Tasks from "./components/Tasks";
import LoginForm from "./components/LoginForm";
import TaskContextProvider from "./context/TasksContext";
import AuthContextProvider from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./route/ProtectedRoute";
function App() {
  return (
    <AuthContextProvider>
      <TaskContextProvider>
        <ProtectedRoute exact path="/" component={Tasks} />
        <Route exact path="/login" component={LoginForm} />
      </TaskContextProvider>
    </AuthContextProvider>
  );
}

export default App;
