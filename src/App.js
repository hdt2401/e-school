import { Typography, Divider, Button } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { useEffect, useState } from "react";
import { setupServer } from "./api/server";
setupServer();

const { Title } = Typography;

const initTheme = {
  width: 500,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  padding: 20,
  boxShadow: "0 0 10px 4px #bfbfbf",
  borderRadius: 5,
  height: "90vh",
};
const MODE = {
  DARK_MODE: {
    backgroundColor: "black",
    color: "white",
  },
  LIGHT_MODE: {
    backgroundColor: "white",
    color: "black",
  },
};

function App() {
  const [theme, setTheme] = useState(initTheme);
  const [darkMode, setDarMode] = useState(false);
  useEffect(() => {
    fetch("/api/todos")
      // .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  const handleChangeTheme = () => {
    if (darkMode) {
      setTheme({
        ...theme,
        ...MODE.LIGHT_MODE,
      });
    } else {
      setTheme({
        ...theme,
        ...MODE.DARK_MODE,
      });
    }
    setDarMode(!darkMode);
  };
  return (
    <div style={theme}>
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Button onClick={handleChangeTheme}>
        {!darkMode ? "Dark" : "Light"}
      </Button>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
