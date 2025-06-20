import Product from "../Product";
import Alert from "../Alert/Alert";
import UserMenu from "../UserMenu/UserMenu";
import { useState } from "react";
import OrderForm from "../OrderForm/OrderForm";
import SearchForm from "../SearchForm/SearchForm";
import type { Article } from "../types/article";
import ArticleList from "../ArticleList/ArticleList";
import { getArticles } from "../../services/articleService";

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (newTopic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const newArticles = await getArticles(newTopic);
      setArticles(newArticles);
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
      <OrderForm />
      <>
        <SearchForm onSearch={handleSearch} />
        {isLoading && <strong>Loading articles...</strong>}
        {isError && <strong>Something went wrong please try again...</strong>}
        {articles.length > 0 && <ArticleList items={articles} />}
      </>
    </>
  );
}

const product = 12.8;
const number = product.toFixed();

console.log(number);
