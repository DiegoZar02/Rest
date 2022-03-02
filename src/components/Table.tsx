import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../scss/menu.module.scss";

const Table = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(
                    "https://upc-restaurant.herokuapp.com/API/platillo/listado"
                );
                setMenu(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th className={styles.id}>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Available</th>
                </tr>
            </thead>
            <tbody>
                {menu.length > 0 ? (
                    menu.map((dish: any) => (
                        <tr key={dish._id}>
                            <td className={styles.id}>{dish._id}</td>
                            <td>{dish.nombre}</td>
                            <td>${dish.costo}</td>
                            <td>{dish.disponible}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td className={styles.no_content}></td>
                        <td className={styles.no_content}></td>
                        <td className={styles.no_content}></td>
                        <td className={styles.no_content}></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;
