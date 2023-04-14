import React from "react";

import styles from "./Registration.module.css"
import Title from "../Title/Title"
import Button from "../Button/Button"


interface RegistrationFormProps {
    confirmation: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = (props) => {
    const handelClick = () => console.log("+");

    return (
        <div>
            <div>
                <Title title="Registration Confirmation" />
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

export default RegistrationForm;

