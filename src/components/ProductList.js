import React from "react";
import { Product } from "./product";
import { Pagination } from "@material-ui/lab";

function ProductList(props) {
  const setProductCount = props.setProductCount;
  const productCount = props.productCount;
  const data = [
    {
      name: "Saat",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYAV2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1599550447000",
      price: 15.18,
    },
    {
      name: "Araba",
      image:
        "https://www.daimler.com/bilder/produkte/pkw/mercedes-benz/neuer-gls/gls-4-w600xh600-cutout.jpg",
      price: 97999.99,
    },
    {
      name: "Ucak",
      image:
        "https://sc04.alicdn.com/kf/U7d478f50cde245359ddaa1b2d2b4faael.jpg",
      price: 15.18,
    },
    {
      name: "Oyun Konsolu",
      image:
        "https://productimages.hepsiburada.net/s/49/375/10986559471666.jpg",
      price: 8999.99,
    },
    {
      name: "Araba",
      image:
        "https://www.daimler.com/bilder/produkte/pkw/mercedes-benz/neuer-gls/gls-4-w600xh600-cutout.jpg",
      price: 97999.99,
    },
    {
      name: "Ucak",
      image:
        "https://sc04.alicdn.com/kf/U7d478f50cde245359ddaa1b2d2b4faael.jpg",
      price: 168.99,
    },
    {
      name: "Saat",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYAV2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1599550447000",
      price: 15.18,
    },
    {
      name: "Oyun Konsolu",
      image:
        "https://productimages.hepsiburada.net/s/49/375/10986559471666.jpg",
      price: 8999.99,
    },
    {
      name: "Ucak",
      image:
        "https://sc04.alicdn.com/kf/U7d478f50cde245359ddaa1b2d2b4faael.jpg",
      price: 168.99,
    },
  ];

  return (
    <>
      <div className="productList">
        {data.map((item) => (
          <Product
            setProductCount={setProductCount}
            productCount={productCount}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      <Pagination count={10} className="pagination" />
    </>
  );
}

export default ProductList;
