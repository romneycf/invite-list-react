import React, { ReactNode } from "react";
import styles from "./Login.module.css";
import Button from "../../../../shared/components/button/button";
import Card from "../../../../shared/components/card/card";
import Title from "../../../../shared/components/title/title";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { signIn, user } = useAuth();
  const navigator = useNavigate();
  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    await signIn("mauroccvieira@gmail.com", "1234456");
    navigator("/home");
  };

  return (
    <div className={styles.container}>
      <span style={{ color: "white" }}>Welcome {user?.name}!</span>
      <Card>
        <Title>Bem vindo !</Title>
        <form onSubmit={onFormSubmit}>
          <label>Username</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <div>
            <Button type="submit">Acessar</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
