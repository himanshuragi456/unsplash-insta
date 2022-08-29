import { giveArray } from "../../helpers";
import { LoadingCard } from "../LoadingCard";
import styles from './style.module.css'

export const LoadingPosts = ({numberPerPage}) => {
    const loadPages = giveArray(numberPerPage);
    return (
        <div className={styles.cardGridContainer}>
        {loadPages.map(num => {return <LoadingCard />})}
        </div>
    );
}