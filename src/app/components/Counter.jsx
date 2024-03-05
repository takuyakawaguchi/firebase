import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return(
        <button 
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded text-2xl"
            onClick={() => setCount(count + 1)}
        >
            Count: {count}
        </button>
    );
}