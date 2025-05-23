import Product from "../Product";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
import UserMenu from "../UserMenu/UserMenu";
import { useState } from "react";
import ClickCounter from "../ClickCounter";

interface Values {
  x: number;
  y: number;
}

export default function App() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  const updateValue = (key: keyof Values) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <UserMenu name="" />
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <>
        <Alert />
        <Alert type="success" />
        <Alert type="error" />
      </>
      <>
        <Button variant="primary" text="Login" />
        <Button variant="secondary" text="Follow" />
        <ClickCounter value={clicks} onUpdate={handleClick} />
        <ClickCounter value={clicks} onUpdate={handleClick} />
      </>
      <>
        <p>
          x: {values.x}, y: {values.y}
        </p>
        <button onClick={() => updateValue("x")}>Update x</button>
        <button onClick={() => updateValue("y")}>Update y</button>
      </>
    </>
  );
}
