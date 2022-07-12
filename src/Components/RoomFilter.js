import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../Components/Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  // get unique types
  let types = getUnique(rooms, "type");
  // add all types
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return <option key={index} value={item}>{ item}</option>
  })
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label for="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests */}
        <div className="form-group">
          <label for="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label for="type">room price ${ price}</label>
          <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange} className="form-control" />
        </div>
        {/* end of room price */}
      </form>
    </section>
  );
}
