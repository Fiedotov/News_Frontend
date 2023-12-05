import React from 'react';

const ChatInterface = ({ stock }) => {
  if (!stock) {
    return <div className="p-4">Select a stock to start chatting.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{stock.name} Chat</h2>
      {/* Chat messages would go here */}
      <div className="mt-4">
        {/* This is where you would integrate your chatbot or chat interface */}
      </div>
    </div>
  );
};

export default ChatInterface;
