import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const NavBar = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <nav style={{background: theme.ui, color: theme.color}}>
            <h1>Context app</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar;