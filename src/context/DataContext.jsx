import { useContext, createContext } from "react";

export const DataContext = createContext({
    cardContents: [
        {
            id: Date.now(),
            heading: "Your Heading",
            content: "This is your sample note create more by clicking + icon."
        }
    ],
    updateContent: (cardContents) => { },
    deleteCard: (id) => { }
})
export const useData = () => {
    return useContext(DataContext);
}
export const DataContextProvider = DataContext.Provider;