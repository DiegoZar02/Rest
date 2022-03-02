import axios from "axios";
import React, { useState } from "react";
import InfoCard from "../components/InfoCard";
import styles from "../scss/add-dish.module.scss";

const NewDish = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState("");
    const [Error, setError] = useState<Array<string>>([]);
    const [Created, setCreated] = useState(false);

    const Submit = async (e: React.FormEvent) => {
        const errorList: Array<string> = [];
        e.preventDefault();
        const dish = {
            nombre: name,
            costo: parseInt(price),
            disponible: parseInt(available),
        };
        if (!dish.nombre.trim()) errorList.push("name");
        if (isNaN(dish.costo)) errorList.push("price");
        if (isNaN(dish.disponible)) errorList.push("available");

        if (errorList.length > 0) {
            setCreated(false);
            setError(errorList);
            return;
        }
        setError([]);
        try {
            const { data } = await axios.post(
                "https://upc-restaurant.herokuapp.com/API/platillo/crear",
                dish
            );
            if (data.msg !== "") {
                setCreated(true);
                setName("");
                setPrice("");
                setAvailable("");
                setTimeout(() => setCreated(false), 1500);
            }
        } catch (error) {}
    };

    return (
        <section className={styles.new_dish}>
            <h2>New Dish</h2>
            <form onSubmit={Submit}>
                <h4>Name</h4>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Lorem, ipsum dolor."
                />
                <div className={styles.h4}>
                    <h4>Price</h4>
                    <h4>Available</h4>
                </div>
                <div className={styles.input}>
                    <input
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        placeholder="0"
                    />
                    <input
                        type="number"
                        onChange={(e) => setAvailable(e.target.value)}
                        value={available}
                        placeholder="0"
                    />
                </div>
                <input type="submit" value="Add" />
            </form>
            {Error.length > 0 && (
                <InfoCard title="There cannot be empty fields!" red>
                    <ul>
                        {Error.map((error, index) => (
                            <li key={index}>{error} field is empty.</li>
                        ))}
                    </ul>
                </InfoCard>
            )}
            {Created && <InfoCard title="Dish added!" green />}
        </section>
    );
};

export default NewDish;
