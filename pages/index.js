import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import {
  Button,
  ChakraProvider,
  Center,
  Image as ImageChakra,
} from "@chakra-ui/react";

let url = "https://dog.ceo/api/breeds/image/random";

export default function Home() {
  let [dogfact, setdogfact] = useState();
  let [dogCount, setDogCount] = useState(-1);

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
    <>
      <div
        style={{
          color: "blue",
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div className={styles.title}></div>
        <ChakraProvider>
          <ImageChakra
            borderRadius="25px"
            objectFit="cover"
            boxSize="400px"
            src={dogfact}
            alt="Dan Abramov"
          />
        </ChakraProvider>

        {/* objectFit cut image with the size of the boxSize */}
        <br />
        <div
          style={{
            fontSize: "50px",
            marginTop: "10px",
            alignContent: "flex-start",
          }}
        >
          <br />
        </div>
      </div>
      <ChakraProvider>
        <Center>
          <strong>{dogCount}</strong>{" "}
        </Center>
      </ChakraProvider>
      <br />
      <ChakraProvider>
        <Center>
          <Button colorScheme="whatsapp" onClick={apiCall}>
            Novo
          </Button>
        </Center>
      </ChakraProvider>
    </>
  );
}
