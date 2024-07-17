

const Heading = ({ className, title,text }) => {
  return (
    <div
      className={`${className} max-w-[40rem] mx-auto mb-8 lg:mb-10 `}
    >
      {/* {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>} */}
      {title && <h1 className="h1">{title}</h1>}
    </div>
  );
};

export default Heading;