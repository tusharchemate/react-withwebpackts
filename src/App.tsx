import React, { useState } from "react";
import ReactLogo from "../assets/images/react-js-icon.svg";
import Cat from "../assets/images/cat.png";
import styles from "./app.module.scss";
const App = () => {
  const [count, setCount] = useState(0);

  const countInc = () => {
    setCount((count: number) => count + 1);
    console.log("count : ", count);
  };

  const message: string = "Hello, TypeScript!";
  console.log(message);

  return (
    <>
      <div className={styles.header}>
        <h1>React with Typescript and Webpack. By - Tushar   </h1>
        <h3
          className={`${process.env.NODE_ENV == "development" ? styles.dev : styles.prod
            }`}
        >
          Mode: {process.env.NODE_ENV}
        </h3>
      </div>
      <div className={styles.container}>
        <img src={Cat} width={300} height={300} />
        <img src={ReactLogo} width={300} height={300} />
      </div>
      <div className={styles.content}>
        <button className={styles.btn} onClick={countInc}>
          Count
        </button>
        &nbsp;{count}
      </div>
    </>
  );
};

export default App;
