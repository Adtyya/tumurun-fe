function ButtonPrimary({ children, className = "", ...other }) {
  return (
    <button {...other} className={`bg-primary px-3.5 py-1.5 ${className}`}>
      {children}
    </button>
  );
}

function ButtonTransparent({ children, className = "", ...other }) {
  return (
    <button {...other} className={`bg-transparent px-3.5 py-1.5 ${className}`}>
      {children}
    </button>
  );
}

export { ButtonPrimary, ButtonTransparent };
