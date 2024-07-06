import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../hooks/userEventsData";

const Home = () => {
    const { events, isLoading, error, fetchEvents } = useEventsData();
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef();

    useEffect(() => {    
        fetchEvents();
    }, []);

    const handleNavbarSearch = (term) => {
        console.log(containerRef.current.setSearch(""));
        setSearchTerm(term);
        fetchEvents(`&keyword=${term}`);
    };

    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {isLoading ? <p>Cargando resultados...</p> : <Events searchTerm={searchTerm} events={events} />}
            {!!error && <p>Ha ocurrido un error</p>}
        </>
    );
};
export default Home;
