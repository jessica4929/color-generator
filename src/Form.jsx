import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h3>Color Generator</h3>{" "}
      <form className="color-form" onSubmit={handleSubmit}>
        <label></label>
        <input
          type="color"
          id="color-input"
          value={color}
          name="color-input"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          id="text"
          value={color}
          name="text-input"
          autoFocus={true}
          placeholder="#f15025"
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit" className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
