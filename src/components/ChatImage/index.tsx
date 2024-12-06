import styles from "./style.module.css";

export const ChatImage = ({ img, is_sending }: { img: string; is_sending: boolean }) => {
    return (
        <div className={styles.img}>
            <img width={0} height={0} alt="img" className={styles.onimg} src={img} />
            {!is_sending && (
                <div className={styles.spinWrapper}>
                    <div className={styles.spin}></div>
                </div>
            )}
        </div>
    );
};
