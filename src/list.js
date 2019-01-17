import React from "react";

function List(props) {

    return (
        <div className="column">
            {/* <li className="question" onClick={() => props.handleChange(props.index)}>
                {props.objectID}
            </li>
            <li className={current ? "answer open" : "answer"}>
                {current && <p>{props.title}</p>}
            </li> */}

            <img src={props.image} alt="logo" />
            {/* <p>{props.code}</p> */}
        </div>
    );
}
export default List;