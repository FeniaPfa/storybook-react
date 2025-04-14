import "./Button.css";

type ButtonProps = {
  style?: "filled" | "outlined";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
};

export const Button = ({
  style = "filled",
  size = "small",
  label,
  onClick,
}: ButtonProps) => {
  const classNames = ["button", `button--${style}`, `button--${size}`].join(
    " "
  );

  return (
    <button className={classNames} onClick={onClick}>
      {label}
    </button>
  );
};
