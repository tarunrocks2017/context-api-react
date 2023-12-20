import React from "react";
import NavBar from "./src/NavBar";
import ThemeContextProvider from "./src/ThemeContext";
import ThemeToggle from "./src/ThemeToggle";
import CourseList from "./src/CourseList";

function App() {
    return (
      <div className="App">
        <ThemeContextProvider>
          <NavBar />
          <CourseList />
          <ThemeToggle />
        </ThemeContextProvider>
      </div>
    );
}

export default App;