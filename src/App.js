import React, { useState } from "react";
import { Header, ProductList } from "./components";
function App() {
  const [productCount, setProductCount] = useState(0);
  return (
    <>
      <Header productCount={productCount} />
      <ProductList
        setProductCount={setProductCount}
        productCount={productCount}
      />
    </>
  );
}

export default App;
