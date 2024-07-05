import { useRef, useState } from "react";
import "./App.css";
import Events from "./components/Events";
import Navbar from "./components/Navbar";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef();

    const handleNavbarSearch = (term) => {
        console.log(containerRef);
        setSearchTerm(term);
    };
    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            <Events searchTerm={searchTerm} />
        </>
    );
}

export default App;
