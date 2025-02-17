// import { createContext } from "react";
// import runChat from "../config/whale";

// export const Context = createContext();

// const ContextProvider = (props) => {

//     const onSent = async (prompt) => {
//        await  runChat(prompt)
//     }

//     onSent("what is react js")

//     const contextValue = {

//     }

//     return (
//         <Context.Provider value={contextValue}>
//             {props.children}
//         </Context.Provider>

//     )
// }

// export default ContextProvider;
import { createContext, useEffect } from "react";
import runChat from "../config/whale";
import { useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompt, setPreviousPrompt] = useState([]);
    const [ShowResponse, setShowResponse] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const onSent = async (prompt) => {
        await runChat(input);
    };

    

    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        ShowResponse,
        loading,
        resultData,
        input,
        setInput,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;