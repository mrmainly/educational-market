import styles from "./style.module.css";

export const ChatMessage = ({ message, type }: { message: string; type: "incoming" | "ongoing" }) => {
    return <div className={type === "incoming" ? styles.inmessage : styles.onmessage}>{message}</div>;
};
