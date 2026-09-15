function Card({ children, className = "" }) {
  return (
    <div className={`app-card ${className}`}>
      {children}
    </div>
  );
}

export default Card;