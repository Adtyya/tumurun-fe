export default function Container({ children, className = "" }) {
  return (
    <div
      className={`${className} w-full px-2.5 lg:px-0 h-full max-w-7xl mx-auto`}
    >
      {children}
    </div>
  );
}
