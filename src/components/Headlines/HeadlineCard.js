import React from 'react';

const HeadlineCard = ({ headline }) => {
  return (
    <div className="bg-white p-4 my-2 rounded-md shadow">
      <h3 className="font-semibold">{headline.title}</h3>
      <p className="text-sm">{headline.content}</p>
      <div className="text-right text-xs text-gray-500">{headline.date}</div>
    </div>
  );
};

export default HeadlineCard;
