import styles from "./index.module.css";

const Index = ({title}) => {
    return (
        <div className={styles.title__page}>
            <h2>{title}</h2>
        </div>
    );
}

export default Index;
