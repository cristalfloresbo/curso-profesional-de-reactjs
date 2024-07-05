import { useState, useEffect } from "react";
import eventsJSON from "../data/events.json";

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        // Load API Call
        setTimeout(() => {
            try {
                setData(eventsJSON);
                setIsLoading(false);
            } catch (err) {
                setError(err);
            }
        }, 4000);
    }, []);

    console.log(data);
    return { events: data?._embedded?.events || [], isLoading, error };
};

export default useEventsData;
