function Button({ label, onClick, type = "button", style = {}, disabled = false }) {
  return (
    <button
      type={type}
      className="btn"
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {label}
    </button>
  );
}

export default Button;
