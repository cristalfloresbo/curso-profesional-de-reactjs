import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";

const Profile = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleInicioClick = () => {
        navigate("/");
    };
    const handleTabClick = (tab) => {
        navigate(`/profile/${tab}`);
    };
    return (
        <div>
            <Link to="/" className={styles.homeLink}>
                Inicio
            </Link>
            <div className={styles.tabsContainer}>
                <span className={styles.tab} onClick={handleInicioClick}>
                    Inicio
                </span>
                <span
                    className={`${
                        pathname.includes("my-info") ? styles.active : ""
                    } ${styles.tab}`}
                    onClick={() => handleTabClick("my-info")}
                    style={{
                        marginRight: "8pxs",
                    }}
                >
                    Mi información
                </span>
                <span
                    className={`${
                        pathname.includes("liked-events") ? styles.active : ""
                    } ${styles.tab}`}
                    onClick={() => handleTabClick("liked-events")}
                    style={{
                        marginRight: "8pxs",
                    }}
                >
                    Eventos Favoritos
                </span>
            </div>
            <Outlet />
        </div>
    );
};
export default Profile;
