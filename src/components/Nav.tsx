import React from "react";
import { IoRestaurantOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import styles from "../scss/nav.module.scss";

const MyNav = () => {
    return (
        <nav className={styles.nav}>
            <Link className={styles.brand} to="/">
                rest
                <IoRestaurantOutline />
            </Link>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "" : styles.active
                        }
                        to="/"
                        children="Home"
                    />
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "" : styles.active
                        }
                        to="/menu"
                        children="menu"
                    />
                </li>
            </ul>
        </nav>
    );
};

export default MyNav;
