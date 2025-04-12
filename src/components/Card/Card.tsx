import "./Card.css";
type CardProps = {
  title: string;
  description: string;
  image: string;
  size?: "small" | "medium" | "large";
};

export const Card = ({
  title,
  description,
  image,
  size = "small",
}: CardProps) => {
  const cardClassNames = ["card", `card--${size}`].join(" ");

  return (
    <div className="wrapper">
      <div className={cardClassNames}>
        <div className="card__avatar"></div>
        <div className="card__content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
