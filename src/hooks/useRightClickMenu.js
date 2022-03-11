import { useState, useEffect } from "react";

export default function useRightClickMenu() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault(); // preventing default -> the browser to display the default context menu (e.g. the one from Chrome, Firefox, etc.)

    // check if context menu dimensions "fit" within the browser window. If not, move the context menu accordingly
    e.pageX + 200 > window.innerWidth
      ? setX(`${window.innerWidth - 230}`)
      : setX(e.pageX);
    e.pageY + 400 > window.innerHeight
      ? setY(`${window.innerHeight - 430}`)
      : setY(e.pageY);

    setShowMenu(true);
  };

  const handleClick = () => {
    showMenu && setShowMenu(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);

    // effect cleanups - removing event listeners
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { x, y, showMenu };
}
