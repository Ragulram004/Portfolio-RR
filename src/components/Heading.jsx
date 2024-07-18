

const Heading = ({ className, title }) => {
  return (
    <div
      className={`${className} max-w-[40rem] mx-auto mb-8 lg:mb-10 `}
    >
      {title && <h1 className="h1">{title}</h1>}
    </div>
  );
};

export default Heading;