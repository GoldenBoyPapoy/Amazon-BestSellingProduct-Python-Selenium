import { useState } from "react";
import Table from "./components/Table";
import Filtering from "./components/FilterComponent";

const category = [
  { id: 1, name: "Clothing, Shoes & Jewelry" },
  { id: 2, name: "Beauty & Personal Care" },
  { id: 3, name: "Kitchen & Dining" },
  { id: 4, name: "Electronics" },
  { id: 5, name: "Sports & Outdoors" },
  { id: 6, name: "Handmade Products" },
];

const data = [
  {
    id: 1,
    title: "Crocs Unisex-Adult Classic Clog",
    category: 1,
    star: 4.8,
    rating: "406,867",
    price: 34.95,
    videoCount: 6,
    urls: [
      "https://www.amazon.com/vdp/0553ad2f30e64f459a2d4fc5fee6e706?ref=dp_vse_ibvc0",
      "https://www.amazon.com/vdp/d2a50e5ad0044143b79904a649510c1f?ref=dp_vse_ibvc1",
      "https://www.amazon.com/vdp/b9f92ec2ab10420c99e37f231d5f8b7b?ref=dp_vse_ibvc2",
      "https://www.amazon.com/vdp/cfcd07d00f8e4cceb4eac3fae5acf4f5?ref=dp_vse_ibvc3",
      "https://www.amazon.com/vdp/0b0051558d3f465da3fae0d716540732?ref=dp_vse_ibvc4",
      "https://www.amazon.com/vdp/0355d3d9120849e4ba5dd45d7f1df36e?ref=dp_vse_ibvc5",
    ],
  },
  {
    id: 2,
    title: "Hello",
    category: 2,
    star: 4.8,
    rating: "406,867",
    price: 34.95,
    videoCount: 2,
    urls: [
      "https://www.amazon.com/vdp/0553ad2f30e64f459a2d4fc5fee6e706?ref=dp_vse_ibvc0",
      "https://www.amazon.com/vdp/d2a50e5ad0044143b79904a649510c1f?ref=dp_vse_ibvc1",
    ],
  },
  {
    id: 3,
    title: "ABC",
    category: 1,
    star: 4.8,
    rating: "406,867",
    price: 34.95,
    videoCount: 1,
    urls: [
      "https://www.amazon.com/vdp/0355d3d9120849e4ba5dd45d7f1df36e?ref=dp_vse_ibvc5",
    ],
  },
];

const App = () => {
  const [list, setList] = useState([]);

  const setCondition = (category, range) => {
    setList(
      data.filter(
        (item) =>
          item.category == category &&
          item.videoCount >= range[0] &&
          item.videoCount <= range[1]
      )
    );
  };

  return (
    <main
      className="container border border-secondary-subtle"
      style={{ height: "100vh" }}
    >
      <Filtering categories={category} setCondition={setCondition} />
      <Table data={list} />
    </main>
  );
};

export default App;
