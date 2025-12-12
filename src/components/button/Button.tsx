import { buttonProps } from "@/types";
import clsx from "clsx";

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  bgColor,
  ...props
}: buttonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton &&
          "text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-semibold rounded-xl text-base px-6 py-3 me-2 mb-2 focus:outline-none transition-all shadow-lg",
          `${bgColor} text-white font-semibold rounded-xl text-base px-6 py-3 me-2 mb-2 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all shadow-lg`
        )}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;