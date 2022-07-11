import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: "Ненужная вещь", price: "200"}, 
        {id: 1, value: 0, name: "Ложка"}, 
        {id: 2, value: 0, name: "Вилка"},
        {id: 3, value: 0, name: "Тарелка"},
        {id: 4, value: 0, name: "Набор минималиста"}
    ];
    const updatedState = [
        {id: 0, value: 1, name: "Ненужная вещь", price: "200"}, 
        {id: 1, value: 2, name: "Ложка"}, 
        {id: 2, value: 3, name: "Вилка"},
        {id: 3, value: 4, name: "Тарелка"},
        {id: 4, value: 5, name: "Набор минималиста"}
    ]
    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {        
        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
    };
    const handleUpdate = () => {
        setCounters(updatedState);
    }
    return (
        <>
          {counters.map((count) => (
              <Counter 
              key={count.id}              
              onDelete={handleDelete}
              {...count} 
              />
              
          ))}
          <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
          <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>обновить состояние</button>
        </>
    );
};

export default CountersList;
