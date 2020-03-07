import React, {useEffect, useReducer, useState} from 'react';

interface MyList {
    text: string;
    complete: boolean;
}

type ActionType = | { type: "add", text: string} | { type: "remove", idx: number};

type State = MyList[];

const ListReducer = (state: State, action: ActionType) => {
    switch (action.type) {
        case "add":
            return [...state, { text: action.text, complete: false}]
        case "remove":
            return state.filter((_, i) => action.idx !== i);
        default:
            return state;
    }
}

export const ReduceHookComponentExample: React.FC = ({}) => {
    const [list, setList] = useReducer(ListReducer, []);

    return (
        <div>
            <h5>Reduce Hook Component Example</h5>
            <button onClick={()=>{
                setList({type: "add", text: "new text added"})
            }}>+</button>

            <p>{list[0] === undefined ? "" : list[0].text }</p>
        </div>
    );
};