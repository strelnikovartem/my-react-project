import axios from "axios";

import Product from "../Product";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
import UserMenu from "../UserMenu/UserMenu";
import { useState } from "react";
import ClickCounter from "../ClickCounter";
import OrderForm from "../OrderForm/OrderForm";
import SearchForm from "../SearchForm/SearchForm";
import type { Article } from "../types/article";
import ArticleList from "../ArticleList/ArticleList";

interface Values {
  x: number;
  y: number;
}

interface ArticlesHttpResponse {
  hits: Article[];
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

  const handleOrder = (data: string) => {
    console.log("Order received from:", data);
    // можна зберегти замовлення, викликати API, показати повідомлення тощо
  };

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await axios.get<ArticlesHttpResponse>(
        `https://hn.algolia.com/api/v1/search?query=${topic}`
      );
      setArticles(response.data.hits);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
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

      <h1>Place your order</h1>
      <OrderForm onSubmit={handleOrder} />
      <div>
        <SearchForm onSubmit={handleSearch} />
        {isLoading && <p>Loading data, please wait...</p>}
        {isError && <p>Whoops, something went wrong! Please try again!</p>}
        {articles.length > 0 && <ArticleList items={articles} />}
      </div>
    </>
  );
}
