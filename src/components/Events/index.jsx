import PropTypes from "prop-types";
import useEventsData from "../../hooks/userEventsData";
import EventItem from "./components/EventItem";
import { useNavigate } from "react-router-dom";

const Events = ({ searchTerm }) => {
    const { events, isLoading, error } = useEventsData();
    const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        console.log(`Event ${id} clicked`);
        navigate(`/detail/${id}`);
    };

    const renderEvents = () => {
        let eventsFiltered = events;
        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) =>
                item.name
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
            );
        }
        return eventsFiltered.map((eventItem) => (
            <EventItem
                key={`event-item-${eventItem.id}`}
                id={eventItem.id}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventItemClick}
            />
        ));
    };

    if (error) {
        return <p>Ha ocurrido un error</p>;
    }

    if (isLoading) {
        return <p>Cargando resultados...</p>;
    }

    return (
        <div>
            {renderEvents()}
        </div>
    );
};

Events.propTypes = {
    searchTerm: PropTypes.string.isRequired,
};

export default Events;
