import { useEffect, useState } from "react";
import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constants";
import EventItem from "../../../../components/Events/components/EventItem";
import { useNavigate } from "react-router-dom";

const LikedEvents = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const likedEvents =
                    JSON.parse(
                        localStorage.getItem(LIKED_EVENTS_STORAGE_KEY) || "[]"
                    ) || [];

                console.log(likedEvents);
                const result = [];

                for (const eventId of likedEvents) {
                    const response = await fetch(
                        `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
                            import.meta.env.VITE_TICKETMASTER_API_KEY
                        }`
                    );
                    const data = await response.json();
                    result.push(data);
                }

                setEvents(result);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEventDetails();
    }, []);

    const handleEventItemClick = (eventId) => {
        navigate(`/detail/${eventId}`);
    };

    if (error && Object.keys(error) > 0) {
        return <div>Ha ocurrido un error</div>;
    }

    if (isLoading) {
        return <div>Cargando...</div>;
    }
    return (
        <div>
            {events.map((event, index) => (
                <EventItem
                    key={`liked-event-item-${event.id}-${index}`}
                    id={event.id}
                    name={event.name}
                    info={event.info}
                    image={event.images[0].url}
                    onEventClick={handleEventItemClick}
                />
            ))}
        </div>
    );
};
export default LikedEvents;
