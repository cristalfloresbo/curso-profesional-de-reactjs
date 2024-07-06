import PropTypes from "prop-types";
import EventItem from "./components/EventItem";
import { useNavigate } from "react-router-dom";

const Events = ({ searchTerm, events }) => {
    
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

    return (
        <div>
            {renderEvents()}
        </div>
    );
};

Events.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    events: PropTypes.array.isRequired,
};

export default Events;
