import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
// import { useRouter } from "next/router";

let url = "https://dog.ceo/api/breeds/image/random";

export default function Home() {
  let [dogfact, setdogfact] = useState();
  let [dogCount, setDogCount] = useState(-1);
  //  useEffect(() => {
  //     apiCall();
  //    console.log('foi chamado - ou seja quando ele carrega a página')
  //  }, []);
  useEffect(() => {
    console.log("mais uma imagem chamada");
    setDogCount((dogCount += 1));
  }, [dogfact]);

  const apiCall = () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setdogfact(result.message));
  };

  return (
    <div style={{ color: "blue", display: "flex", justifyContent: "center" }}>
      <div className={styles.title}></div>

      <button
        onClick={apiCall}
        style={{ color: "blue", display: "flex", justifyContent: "flex-start" }}
      >
        Botão!
      </button>

      <Image
        src={dogfact}
        alt="dog"
        layout="fixed"
        width="600px"
        height="500px"
      />
      <br />
      <div
        style={{
          fontSize: "50px",
          marginTop: "10px",
          alignContent: "flex-start",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {dogCount}
      </div>
    </div>
  );
}
