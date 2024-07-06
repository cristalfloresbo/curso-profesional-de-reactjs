import { useState } from "react";

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const fetchEvents = async (params = "") => {
        try {
            const response = await fetch(
                `https://app.ticketmaster.com/discovery/v2/events.json?apikey=SnXyjG5sBVR6yyvkUxokXNl7wUGHLJiH&countryCode=MX${params}`
            );
            const data = await response.json();
            setData(data);
            setIsLoading(false);
        } catch (err) {
            setError(err);
        }
    };

    return {
        events: data?._embedded?.events || [],
        isLoading,
        fetchEvents,
        error,
    };
};

export default useEventsData;
