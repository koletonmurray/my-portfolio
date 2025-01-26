export default function ImageDisplay ({ image, alt, className = '' }) {
  return (
    <div
      className={`order-1 sm:order-2 flex justify-center px-[20%] sm:px-0 w-full sm:w-1/3 ${className}`}
    >
      <img
        src={image}
        alt={alt}
        className="mx-auto rounded-xl mt-5 sm:mt-[5em]"
      />
    </div>
  );
};