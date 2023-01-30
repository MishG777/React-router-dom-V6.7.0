import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("products");
  };

  return (
    <>
      <div>My Home Page</div>
      <p>
        Go to <Link to="products">the list of products</Link>{" "}
      </p>
      <p>
        <button onClick={navigateHandler}>go to Products</button>
      </p>
    </>
  );
}

export default HomePage;
