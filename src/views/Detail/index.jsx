// import { useState } from "react";
// import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import eventFetcher from "../../utils/fetchEvents";
// import useEventsResults from "../../state/events-result";

const pathname = window.location.pathname;
const resource = eventFetcher(pathname.substring(8, pathname.length));

const Detail = () => {
    // const { data } = useEventsResults();
    // const { eventId } = useParams();
    // const [eventData, setEventData] = useState({});
    const eventData = resource.eventDetails.read();

    return (
        <div className={styles.container}>
            <div className={styles.mainInfoContainer}>
                <img
                    src={eventData.images?.[0].url}
                    className={styles.eventImage}
                    alt={eventData.name}
                />
                <h4 className={styles.eventName}>{eventData.name}</h4>
                <p className={styles.infoParagraph}>{eventData.info}</p>
                {eventData.dates?.start.dateTime ? (
                    <p className={styles.dateParagraph}>
                        {format(
                            new Date(eventData.dates?.start.dateTime),
                            "d LLLL yyyy H:mm",
                            { locale: es }
                        )}
                        hrs
                    </p>
                ) : null}
            </div>
            <div className={styles.seatInfoContainer}>
                <h6 className={styles.seatMapTitle}>Mapa del evento</h6>
                <img src={eventData.seatmap?.staticUrl} alt="Seatmap event" />
                <p className={styles.pleaseLegend}>{eventData.pleaseNote}</p>
                <p className={styles.priceRangesLegend}>
                    {eventData.priceRanges?.[0].min} -{" "}
                    {eventData.priceRanges?.[0].max}{" "}
                    {eventData.priceRanges?.[0].currency}
                </p>
            </div>
            <a href={eventData.url}>Ir por tus boletos</a>
        </div>
    );
};

export default Detail;
