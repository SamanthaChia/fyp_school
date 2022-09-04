import React from "react";
import { v4 as uuidv4 } from "uuid";

const Labels = ({ labels }) => {
    if (labels.length === 0) return null;
    return (
        <div className="labels">
            {labels.map((label) => (
                <p
                    className={`labels__label`}
                    key={uuidv4()}
                    style={{ color:"#fff", backgroundColor: `#${label.color}` }}
                >
                    {label.title}
                </p>
            ))}
        </div>
    );
};

export default Labels;
