import PropTypes from "prop-types";
import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJSON from "../../data/events.json";

const Events = ({ searchTerm }) => {
    const [data] = useState(eventsJSON);
    const {
        _embedded: { events },
    } = data;
    const handleEventItemClick = (id) => {
        console.log(`Event ${id} clicked`);
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
            <p>Events</p>
            {renderEvents()}
        </div>
    );
};

Events.propTypes = {
    searchTerm: PropTypes.string.isRequired,
};

export default Events;
