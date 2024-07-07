import PropTypes from "prop-types";
import EventItem from "./components/EventItem";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

const Events = ({ searchTerm, events }) => {
    const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        navigate(`/detail/${id}`);
    };

    console.log('render events');

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

    return <div>{renderEvents()}</div>;
};

Events.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    events: PropTypes.array.isRequired,
};

export default memo(Events);
