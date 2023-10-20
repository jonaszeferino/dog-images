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
  let [dog, setDog] = useState("");

  useEffect(() => {
    console.log("mais uma imagem chamada");
    setDogCount((dogCount += 1));
  }, [dogfact]);

  const apiCall = () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setdogfact(result.message);

        if (result.message) {
          // Use uma expressão regular para encontrar a raça na URL
          const regex = /breeds\/([^/]+)/;
          const match = result.message.match(regex);

          if (match) {
            // O trecho correspondente estará em match[1]
            const breed = match[1];
            setDog(breed);
          }
        }
      });
  };

  return (
    <>
      <ChakraProvider>
        <Center>
          <h1
            style={{
              color: "black",
              fontSize: "2rem", // Tamanho da fonte em "rem"
              marginTop: "100px",
            }}
          >
            <strong>Random Dogs</strong>
          </h1>
        </Center>
      </ChakraProvider>

      <ChakraProvider>
        <Center>
          <span>{dog}</span>
        </Center>
      </ChakraProvider>

      <div
        style={{
          color: "blue",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <div className={styles.title}></div>
        {dogfact ? (
          <ChakraProvider>
            <ImageChakra
              borderRadius="25px"
              objectFit="cover"
              boxSize="500px"
              src={dogfact}
              alt="Random Dog"
            />
          </ChakraProvider>
        ) : (
          "Click On Button New"
        )}

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
            New
          </Button>
        </Center>
      </ChakraProvider>
    </>
  );
}
