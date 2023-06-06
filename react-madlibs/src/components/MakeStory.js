const Story = ({ id, title, img, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div
      key={id}
      onClick={handleClick}
      className="w-96 h-72 text-center p-10 bg-slate-300 m-4 relative rounded shadow-2xl transition duration-300 ease-in-out hover:shadow-cyan-800/50"
    >
      <img
        src={img}
        alt="story"
        className="w-full h-full object-cover absolute top-0 left-0 rounded"
      />
      <div className="w-full h-30 flex items-center justify-center absolute bottom-0 left-0 rounded z-10 bg-black bg-opacity-80 ">
        <div className="text-gray-300 p-10 font-bold text-xl">{title}</div>
      </div>
    </div>
  );
};

export default Story;
