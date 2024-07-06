import PropTypes from "prop-types";
import "./styles.css";
import style from "./EventItem.module.css";

const EventItem = ({ id, info, name, image, onEventClick }) => {
    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();
        onEventClick(id);
    };

    return (
        // ejemplo para la propagacion
        <div
            onClick={() => console.log("padre clickeado")}
            // className="event-item-container"
            className={style.eventItemContainer}
        >
            <img src={image} alt={name} width={200} height={200} />
            <div
                // className="event-info-container"
                className={style.eventInfoContainer}
            >
                <h4
                    // className="event-name"
                    className={style.eventName}
                >
                    {name}
                </h4>
                <p
                    // className="event-info"
                    className={style.eventInfo}
                >
                    {info}
                </p>
                {/* cuando se ejecuta este evento tambiente se va a ejetucar el evento del padre si no se llama a la funcion stopPropagation()*/}
                <button
                    // className="see-more-btn"
                    className={style.seeMoreBtn}
                    onClick={handleSeeMoreClick}
                >
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
