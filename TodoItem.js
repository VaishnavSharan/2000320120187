import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div>
        <h4>{todo.trainName}</h4>
        <p>{todo.trainNumber}</p>
        {/* Add other train detail fields here, e.g., departureTime, seatsAvailable, price, delayedBy */}
        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
      </div>
      <hr />
    </>
  );
};