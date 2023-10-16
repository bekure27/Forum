const About = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <p className="text-[16px] mb-4 text-[#FE8402] mr-auto">About</p>
      <h1 className="text-4xl text-[#4B456F] font-bold mb-6 mr-auto">
        Evangadi Networks Q&A
      </h1>
      <div className="flex flex-col flex-wrap  items-center gap-4">
        <p className="text-[16px] text-[#656565] w-full ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          magnam, ut minus pariatur rerum obcaecati maiores ipsam assumenda
        </p>
        <p className="text-[16px]  text-[#656565] w-full ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          magnam, ut minus pariatur rerum obcaecati maiores ipsam assumenda
          quidem
        </p>
      </div>

      <button className="bg-[#FE8402]  rounded text-white px-4 py-2 mt-4 mr-auto">
        How IT WORKS
      </button>
    </div>
  );
};

export default About;
