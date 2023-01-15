import React from "react";
import { Paper, Text, Group, Button } from "@mantine/core";
import Link from "next/link";

function interStart() {
  return (
    <div
      style={{
        position: "static",
        height: "100vh",
        backgroundImage: "url('https://i.gifer.com/CjnH.gif')",
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
            <Text size={"md"}>Soon to be fully automated!</Text>
          </Group>
          <Group position="apart">
            <Link href={"/CHESTINTERMEDIATE/jumpingJack"}>
              <Button style={{ left: "13vh" }}>
                <Text size="lg">Thank you 😊</Text>
              </Button>
            </Link>
          </Group>
        </Paper>
      </div>
    </div>
  );
}

export default interStart;
