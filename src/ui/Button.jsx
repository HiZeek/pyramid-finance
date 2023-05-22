const Button = ({ className, type, onClick, children }) => {
  return (
    <button
      className={`rounded-2xl font-medium ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
