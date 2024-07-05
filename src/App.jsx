import { useEffect, useState } from "react";
import "./App.css";
import Events from "./components/Events";
import Navbar from "./components/Navbar";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        console.log("useEffect");
    }, [searchTerm]);
    
    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
    }
    return (
        <>
            <Navbar onSearch = {handleNavbarSearch} />
            <Events searchTerm={searchTerm} />
        </>
    );
}

export default App;
