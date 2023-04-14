import React from "react";

import styles from "./Succes.module.css"
import Title from "../Title/Title"
import Button from "../Button/Button"


interface SuccesProps {
    confirmation: string;
}

const Succes: React.FC<SuccesProps> = (props) => {
    const handelClick = () => console.log("+");

    return (
        <div>
            <div>
                <Title title="Succes" />
            </div>
            <div className={styles.notice}>
                <p className={styles.text}>{props.confirmation}</p>
                <div className={styles.button}>
                    <Button
                        content="Go To Home"
                        color="primary"
                        // onClick={handelClick}
                        size='large'
                        disabled={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default Succes;