import PropTypes from "prop-types";
import "./styles.css";

const EventItem = ({ id, info, name, image, onEventClick }) => {
    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();
        onEventClick(id);
    };

    return (
        // ejemplo para la propagacion
        <div
            onClick={() => console.log("padre clickeado")}
            className="event-item-container"
        >
            <img src={image} alt={name} width={200} height={200} />
            <div className="event-info-container">
                <h4 className="event-name">{name}</h4>
                <p className="event-info">{info}</p>
                {/* cuando se ejecuta este evento tambiente se va a ejetucar el evento del padre si no se llama a la funcion stopPropagation()*/}
                <button className="see-more-btn" onClick={handleSeeMoreClick}>Ver mas</button>
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
