import React from "react";

import styles from "./ArticleLarge.module.css"


interface Post {
    id: number;
    image?: string;
    text?: string;
    date: string;
    title: string;
}


const ArticleLarge: React.FC<Post> = (props) => {
    return (
        <article>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.data}>{props.date}</span>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.text}>{props.text}</p>
                </div>
                <div>
                    <img className={styles.img} src={props.image} alt="img" />
                </div>
            </div>
        </article>
    );
};



export default ArticleLarge;