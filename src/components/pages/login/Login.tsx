import React, { ReactNode } from "react";
import styles from "./Login.module.css";
import Title from "../../title/title";
import Card from "../../card/card";
import Button from "../../button/button";

export default function Login() {
  return (
    <div className={styles.container}>
      <Card>
      <Title>Bem vindo !</Title>
        <form>
          <label>Username</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <div>
            <Button type="submit">Acessar</Button>
            <Button type="submit">Registrar</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
