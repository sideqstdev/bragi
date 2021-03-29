import React, { useState, useReducer, useEffect } from 'react';

type Themes = "dark" | "light"

const ThemeContext = React.createContext({
    theme: "dark",
    toggleTheme: () => {},
    selectTheme: (theme: Themes) => {}
})

export const ThemeProvider = ({children}: any) => {

    const [theme, setTheme] = useState("dark")
    

    useEffect(() => {
        if(!localStorage.getItem("sq-theme")){
            localStorage.setItem("sq-theme", "dark")
        }
        setTheme(localStorage.getItem("sq-theme") as Themes)
    }, [])

    const toggleThemes = () => {
        switch(theme){
            case "dark":
                localStorage.setItem("sq-theme", "light")
                setTheme("light")
                return
            case "light":
                localStorage.setItem("sq-theme", "dark")
                setTheme("dark")
                return
            default:
                localStorage.setItem("sq-theme", "dark")
                setTheme("dark")
                return
        }
    }

    const selectThemes = (selectedTheme: Themes) => {

        switch(selectedTheme){
            case "light":
                localStorage.setItem("sq-theme", "light")
                setTheme("light")
                return
            case "dark":
                localStorage.setItem("sq-theme", "dark")
                setTheme("dark")
                return
            default:
                localStorage.setItem("sq-theme", "dark")
                setTheme("dark")
                return
        }
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme: toggleThemes, selectTheme: selectThemes}}>{children}</ThemeContext.Provider>
}

export const useTheme = () => React.useContext(ThemeContext)