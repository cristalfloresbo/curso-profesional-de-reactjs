import { create } from "zustand";

// Store para guardar valores de una manera global
const useEventsResults = create((set) => ({
    data: [],
    error: null,
    isLoding: false,
    fetchEvents: async (params = "") => {
        try {
            await set(() => ({ isLoding: true }));

            const response = await fetch(
                `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
                    import.meta.env.VITE_TICKETMASTER_API_KEY
                }&countryCode=MX${params}`
            );
            const data = await response.json();
            await set(() => ({ data, isLoding: false }));
        } catch (err) {
            await set(() => ({ error: err }));
        }
    },
}));

export default useEventsResults;
