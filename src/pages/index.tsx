import Head from "next/head";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IBM_Plex_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";

const ibm = IBM_Plex_Sans({ weight: "500", subsets: ["latin"] });

function renderItems(items: any[]) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className={ibm.className}>
          {item.name}
          {item.items && renderItems(item.items)}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    async function fetchMenus() {
      const response = await axios.get("/api/menus", {});
      setMenus(response.data);
      setTimeout(fetchMenus, 5000);
    }
    fetchMenus();
  }, []);

  return (
    <>
      <Head>
        <title>Jamie Demo App</title>
        <meta name="description" content="Jamie Demo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          {menus.map((menu: any) => (
            <a
              key={menu.id}
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={ibm.className}>{menu.name}</h2>
              <p className={ibm.className}>Lorem ipsum dolor.</p>
              {menu.items && renderItems(menu.items)}
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
