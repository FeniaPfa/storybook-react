import "./Card.css";
type CardProps = {
  title: string;
  description: string;
  image: string;
  size?: "small" | "medium" | "large";
};

export const Card = ({ title, description, size = "small" }: CardProps) => {
  const cardClassNames = ["card", `card--${size}`].join(" ");

  return (
    <div className={cardClassNames}>
      <div className="card__avatar"></div>
      <div className="card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
