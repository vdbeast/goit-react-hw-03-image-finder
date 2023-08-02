import React from "react";

const Button = ({onLoadMore}) => {

    return (
        <div>
            <button className="Button" type="button" onClick={onLoadMore}>Load More</button>
      </div>
    )
};

export default Button;