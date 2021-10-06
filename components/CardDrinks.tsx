import React from "react";
import Card from "react-bootstrap/Card";

interface foodProps {
  name: string;
  category: string;
  price: number;
  image: string;
  image_alt: string;
}

export const CardDrinks = ({
  name,
  category,
  price,
  image,
  image_alt,
}: foodProps) => {
  return (
    <Card className="mx-auto h-100" style={{ width: "21rem" }}>
      <div className="">
        <Card.Img variant="top" src={image} alt={image_alt} />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-end">${price}MXN</Card.Text>
      </Card.Body>
    </Card>
  );
};
