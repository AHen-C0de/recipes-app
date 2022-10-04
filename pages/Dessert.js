import styled from "styled-components";
import Image from "next/image";

export default function Dessert() {
  return (
    <>
      <h2>Dessert recipes</h2>
      <p>some text...</p>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?"
        alt="cake"
        layout="responsive"
        width={2400}
        height={1599}
      />
    </>
  );
}
