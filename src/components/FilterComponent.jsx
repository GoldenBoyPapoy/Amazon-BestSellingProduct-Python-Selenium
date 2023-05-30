import { useState, useEffect } from "react";
const Filtering = ({ categories, setCondition }) => {
  const [category, setCategory] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(6);
  const [range, setRange] = useState([0, 6]);

  const setFilter = () => {
    setRange([min, max]);
  };
  useEffect(() => {
    setCondition(category, range);
  }, [category, range]);
  return (
    <div className="row m-4">
      <select
        className="form-select col"
        aria-label="Default select example"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value={0}>Select Category</option>{" "}
        {categories.map((item, index) => {
          return (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
      <div className="col">
        <div className="d-flex justify-content-center align-content-center">
          <input
            type="number"
            className="form-control"
            style={{ width: "100px" }}
            value={min}
            onChange={(e) => setMin(e.target.value)}
            min="0"
            max="6"
          ></input>
          <span className="m-1">{" <=  X  <=  "}</span>
          <input
            type="number"
            className="form-control"
            style={{ width: "100px", marginRight: "10px" }}
            value={max}
            onChange={(e) => setMax(e.target.value)}
            min="0"
            max="6"
          ></input>
          <button className="btn btn-outline-success" onClick={setFilter}>
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filtering;
