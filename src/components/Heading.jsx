

const Heading = ({ className, title,text }) => {
  return (
    <div
      className={`${className} max-w-[40rem] mx-auto mb-8 lg:mb-10 md:text-center`}
    >
      {/* {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>} */}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-1  text-n-2">{text}</p>}
    </div>
  );
};

export default Heading;