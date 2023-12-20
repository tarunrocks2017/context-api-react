import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
    const { setSelected , theme } = useContext(ThemeContext);
    console.log('theme :: ',theme)
    const next = theme.name === 'light' ? 'dark' : 'light';
    return (
        <button onClick={() =>{
            console.log('clicking',next)
            setSelected(next)}
        }>toggle the theme</button>
    )
}

export default ThemeToggle;