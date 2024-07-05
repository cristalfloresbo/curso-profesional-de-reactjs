import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        console.log(`onSearch cambio`);
    }, [onSearch])

    useEffect(() => {
        console.log('Componente renderizado');
    }, [])

    useEffect(() => {
        console.log(`search cambio`);
    }, [search])

    const handleInputChange = (evt) => {
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === "Enter") {
            onSearch(search);
        }
    };

    return (
        <div>
            <p>Events</p>
            <input
                placeholder="Busca tu evento favorito"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search}
            />
        </div>
    );
};

Navbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default Navbar;
