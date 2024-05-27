function HeadingOne({ children, className, ...props }) {
  return (
    <h1 className={`${className} text-3xl lg:text-4xl`} {...props}>
      {children}
    </h1>
  );
}

function HeadingTwo({ children, className, ...props }) {
  return (
    <h2 className={`${className} text-2xl lg:text-3xl`} {...props}>
      {children}
    </h2>
  );
}

function HeadingThree({ children, className, ...props }) {
  return (
    <h3 className={`${className} text-xl lg:text-2xl`} {...props}>
      {children}
    </h3>
  );
}

export { HeadingOne, HeadingTwo, HeadingThree };
