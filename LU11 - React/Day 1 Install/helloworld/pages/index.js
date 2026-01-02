import Header from "../components/Header";
import Image from "next/image";
import catPic from '../assets/cat.jpg'

//https://nextjs.org/docs/pages/api-reference/components

export default function Home() {
  return (
    <>
      <Header text={"Hello Next.js"} />
      <h2>Hello World</h2>
      <p>My first Next.js App</p>
      {/*  Random pic on cat off of wiki*/}
      <Image src={catPic} alt="" width={500} height={400} />
    </>
  );
}
