import PropTypes from "prop-types";
import "./styles.css";
import styles from "./EventItem.module.css";
import HearthFilled from "../../../../assets/hearth-filled.png";
import HearthUnfilled from "../../../../assets/hearth-unfilled.png";
import useLikeEvents from "../../../../hooks/useLikeEvents";

const EventItem = ({ id, info, name, image, onEventClick }) => {
    const { isEventLiked, toggleEventLike } = useLikeEvents(id);
    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();
        onEventClick(id);
    };

    const handleHearthClick = () => {
        toggleEventLike();
    };

    return (
        // ejemplo para la propagacion
        <div
            onClick={() => console.log("padre clickeado")}
            // className="event-item-container"
            className={styles.eventItemContainer}
        >
            <div className={styles.imageContainer}>
                <img
                    src={isEventLiked ? HearthFilled : HearthUnfilled}
                    alt="Hearth button"
                    className={styles.hearthImage}
                    onClick={handleHearthClick}
                />
                <img src={image} alt={name} width={200} height={200} />
            </div>
            <div
                // className="event-info-container"
                className={styles.eventInfoContainer}
            >
                <h4
                    // className="event-name"
                    className={styles.eventName}
                >
                    {name}
                </h4>
                <p
                    // className="event-info"
                    className={styles.eventInfo}
                >
                    {info}
                </p>
                {/* cuando se ejecuta este evento tambiente se va a ejetucar el evento del padre si no se llama a la funcion stopPropagation()*/}
                <button
                    // className="see-more-btn"
                    className={styles.seeMoreBtn}
                    onClick={handleSeeMoreClick}
                >
                    {/* <Link to={`/detail/${id}`}>Ver mas</Link> */}
                    Ver mas
                </button>
            </div>
        </div>
    );
};

EventItem.propTypes = {
    id: PropTypes.string.isRequired,
    info: PropTypes.string,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onEventClick: PropTypes.func.isRequired,
};
export default EventItem;
