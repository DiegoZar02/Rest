import React from "react";
import Table from "../components/Table";
import styles from "../scss/menu.module.scss";

const Menu = () => {
    return (
        <section className={styles.menu}>
            <div className={styles.table}>
                <Table />
            </div>
        </section>
    );
};

export default Menu;
