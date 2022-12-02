import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Stack spacing={2} direction="row">
          <Button variant="text" className="text-red-500">
            Text
          </Button>
          <Button variant="contained" className="text-red-500">
            testing by pankaj
          </Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </main>
    </div>
  );
}