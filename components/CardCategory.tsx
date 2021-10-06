import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../public/CardCategory.module.css";

import Link from "next/link";

interface categoryProps {
  title: string;
  image: string;
  image_alt: string;
  category: string;
}

export const CardCategory = ({
  title,
  image,
  image_alt,
  category,
}: categoryProps) => {
  return (
    <Card className="mx-auto text-center" style={{ width: "21rem"}}>
      <div className={styles.shadow_card}>
        <Link href={`/${category}`}>
          <a className={styles.linkCategory}>
            <div className={styles.overflow}>
              <Card.Img variant="top" src={`/images/${image}`} alt={image_alt} />
            </div>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
          </a>
        </Link>
      </div>
    </Card>
  );
};
