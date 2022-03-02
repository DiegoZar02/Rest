import styles from "../scss/cards.module.scss";

const InfoCard = ({
    children,
    title = "Info Text",
    red = false,
    green = false,
}: any) => {
    let colour = styles.card;

    if (red) colour = styles.red_card;
    if (green) colour = styles.green_card;

    return (
        <div className={colour}>
            <h3 className={styles.text}>{title}</h3>
            {children}
        </div>
    );
};

export default InfoCard;
