import test from "node:test";
import "./globals.css"
import Button from "./components/Button";



export default function Home() {
  return (
    <main className="text-center ">
      <h1 className="text-2xl">Hello world :) </h1>
      <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis facere recusandae, cupiditate necessitatibus nihil similique aliquam expedita aspernatur asperiores provident nisi, maxime soluta tenetur quam voluptate. Est dicta quibusdam aut.</p>
      <Button  title="Submit"/>
    </main>
  );
}
