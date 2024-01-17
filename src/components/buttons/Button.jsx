import React from "react";
import styles from "./button.module.css";

const Button = () => {
  return (
    <>
      <button className={styles.tspan} data-all-clear>
        C
      </button>
      <button data-delete>DEL</button>
      <button data-operation>/</button>
      <button data-numbers>1</button>
      <button data-numbers>2</button>
      <button data-numbers>3</button>
      <button data-operation>+</button>
      <button data-numbers>4</button>
      <button data-numbers>5</button>
      <button data-numbers>6</button>
      <button data-operation>x</button>
      <button data-numbers>7</button>
      <button data-numbers>8</button>
      <button data-numbers>9</button>
      <button data-operation>-</button>
      <button data-numbers>.</button>
      <button data-numbers>0</button>
      <button data-equals className={styles.tspan}>
        =
      </button>
    </>
  );
};

export default Button;
