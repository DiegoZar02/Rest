import { Link } from "react-router-dom";
import styles from "../scss/home.module.scss";

const Home = () => {
    return (
        <section className={styles.home}>
            <h2>Welcome to Rest!</h2>
            <h3>The Best place to eat.</h3>
            <Link className={styles.btn} to="/menu" children="menu" />
        </section>
    );
};

export default Home;
