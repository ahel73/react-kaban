import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f, style = {}  }) => (
  <FaStar style={style} color={selected ? "yellow" : "grey"} onClick={onSelect} />
);
const createArray = (length) => [...Array(length)];

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = f => f
}) {
  return (
    <div style={{ padding: "15px", background: 'tomato' }} >
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
          style={{cursor: 'pointer',  padding: "0 5px 0 0",}}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  )
}