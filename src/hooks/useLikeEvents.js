import { useState } from "react";

const LIKED_EVENTS_STORAGE_KEY = "liked-events";

const checkIsEventLiked = (eventId) => {
    const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
    return likedEvents.includes(eventId);
};

const useLikeEvents = (eventId) => {
    const [isEventLiked, setIsEventLike] = useState(checkIsEventLiked(eventId));

    const toggleEventLike = () => {
        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
        const eventIndex = likedEvents.indexOf(eventId);

        if(eventIndex !== -1) {
            likedEvents.splice(eventId, 1);
            setIsEventLike(false);
        } else {
            likedEvents.push(eventId);
            setIsEventLike(true);
        }

        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents));
    }
    return { isEventLiked, toggleEventLike };
};

export default useLikeEvents;
