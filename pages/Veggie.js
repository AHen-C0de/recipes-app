import styled from "styled-components";
import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <h2>Veggie recipes</h2>
      <p>some text...</p>
      <Image
        src="/assets/pizza.jpg"
        alt="pizza"
        layout="responsive"
        width={4256}
        height={2832}
      />
    </>
  );
}
