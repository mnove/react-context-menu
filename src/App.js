import "./App.css";

import Menu from "./components/Menu";
import useRightClickMenu from "./hooks/useRightClickMenu";

function App() {
  const { x, y, showMenu } = useRightClickMenu();

  return (
    <div className="App">
      <h1>Right-click anywhere to show a custom context menu!</h1>
      <Menu x={x} y={y} showMenu={showMenu} />
    </div>
  );
}

export default App;
