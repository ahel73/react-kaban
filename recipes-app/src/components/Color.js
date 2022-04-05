import React from "react";
import StarRating from './StarRating'
import { FaTrash } from "react-icons/fa";
import { useColors } from "../provider/ColorProvider";

export default function Color({
  title,
  color,
  rating,
  id,
}) {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}><FaTrash /></button>    
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={rating => rateColor(id, rating)}
      />
    </section>
  );
}