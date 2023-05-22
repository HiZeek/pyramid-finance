const Container = ({ children, className }) => {
  return <div className={`max-w-7xl m-auto ${className}`}>{children}</div>;
};

export default Container;
