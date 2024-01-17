import React from 'react';

const ChannelBlock = ({ channelName, channelImage }) => {
  return (
    <div className=" max-w-sm w-full lg:max-w-full lg:flex bg-white shadow-xl rounded-md overflow-hidden m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
      <div 
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center text-center overflow-hidden" 
        style={{ backgroundImage: `url(${channelImage})` }} 
        title={channelName}
      />
      <div className="p-4 flex flex-col justify-between leading-normal">
        <h3 className="text-xl font-semibold mb-2">{channelName}</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ChannelBlock;
