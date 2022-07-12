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
    
    
    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {        
        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
    };
    const handleIncriment = (id) => {
        const incrementValue = counters.map((count) => {
           if(count.id === id) {
               count.value += 1;
           };
            return count;
        });
        setCounters(incrementValue);        
    };
    const handleDecriment = (id) => {
        const decrimentValue = counters.map((count) => {
            if (count.id === id) {
                 count.value -=1;
            };
            return count;
        });
        setCounters(decrimentValue);
    };
    return (
        <>
          {counters.map((count) => (
              <Counter 
              key={count.id}              
              onDelete={handleDelete}
              onIncrement={handleIncriment}
              onDecrement={handleDecriment}
              {...count} 
              />
              
          ))}
          <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>          
        </>
    );
};

export default CountersList;
