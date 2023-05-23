// eslint-disable-next-line react/prop-types
const Button = ({ className, type, onClick, children }) => {
  return (
    <button
      className={`rounded-[5px] font-semibold text-sm ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
