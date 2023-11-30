import React from "react";
import "../css/card.css";

// Mappa dei colori per i tag
const tagColors = {
  html: "bg-green-500",
  css: "bg-pink-500",
};

function Card({ title, content, image, tags, published }) {
  const tagElements =
    tags &&
    Array.isArray(tags) &&
    tags.map((tag) => (
      <span
        key={tag}
        className={`rounded-lg px-2 text-xs ${tagColors[tag] || "bg-gray-500"}`}
      >
        {tag}
      </span>
    ));

  const isPublished = typeof published === "boolean" ? published : true;

  const cardContainerClasses = `container mx-auto max-w-screen-md ${
    !isPublished ? "opacity-50" : ""
  }`;

  return (
    <div className={cardContainerClasses}>
      <div className="flex justify-center">
        <div className="card w-full max-w-sm">
          <img
            src={image || "https://picsum.photos/400/200"}
            alt="Card image"
            className="w-full h-40 object-cover"
          />
          <div className="card-content">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-gray-700">{content}</p>
          </div>
          <div className="card-footer">
            <div className="flex gap-2">{tagElements}</div>
            <a href="#" className="btn btn-primary">
              Leggi di più
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
