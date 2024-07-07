import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import ReactPaginate from "react-paginate";
import styles from "./Home.module.css";
import useEventsResults from "../../state/events-result";

const Home = () => {
    const { data, isLoading, error, fetchEvents } = useEventsResults();
    const events = useMemo(
        () => data?._embedded?.events || [],
        [data?._embedded?.events]
    );
    const page = useMemo(() => data?.page || {}, [data?.page]);
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef();

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleNavbarSearch = (term) => {
        console.log(containerRef.current.setSearch(""));
        setSearchTerm(term);
        fetchEvents(`&keyword=${term}`);
    };

    const handlePageClick = useCallback(
        ({ selected }) => {
            fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
        },
        [searchTerm, fetchEvents]
    );

    const renderEvents = () => {
        if (isLoading) {
            return <p>Cargando resultados...</p>;
        }

        if (error) {
            return <p>Ha ocurrido un error</p>;
        }

        return (
            <div>
                <Events searchTerm={searchTerm} events={events} />
                <ReactPaginate
                    className={styles.pagination}
                    nextClassName={styles.next}
                    previousClassName={styles.previous}
                    pageClassName={styles.page}
                    activeClassName={styles.activePage}
                    disabledClassName={styles.disabledPage}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={page.totalPages}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        );
    };

    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {renderEvents()}
        </>
    );
};
export default Home;
