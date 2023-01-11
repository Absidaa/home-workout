import React from "react";
import styles from "../styles/Home.module.css";
import { Paper, Text, Group, Button } from "@mantine/core";

function bigStart() {
  return (
    <div
      style={{
        position: "static",
        height: "100vh",
        backgroundImage:
          "url('https://littlevisuals.co/images/atlantic_ridge.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Paper withBorder p="lg" style={{ maxWidth: "500px" }}>
          <Group position="apart" mb={"lg"}>
            <Text size={"lg"}>
              Please track your workouts in real time while following the
              training.
            </Text>
          </Group>
          <Group position="apart" mb={"lg"}>
            <Text size={"lg"}>Soon to be automated!</Text>
          </Group>
          <Group position="apart">
            <Button className={styles.but}>
              <Text size="lg">Thank you 😊</Text>
            </Button>
          </Group>
        </Paper>
      </div>
    </div>
  );
}

export default bigStart;
