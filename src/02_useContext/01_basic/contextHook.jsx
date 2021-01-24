import React, {useContext, useState} from 'react';

const ThemeContext = React.createContext();
const ThemeContextUpdate = React.createContext();

export const useTheme = () => {
   return useContext(ThemeContext);
}

export const useThemeUpdate = () => {
   return useContext(ThemeContextUpdate);
}

export function ThemeProvider({children}) {
   const [theme, setTheme] = useState(true);

   const setToggleTheme = () => {
      setTheme(!theme);
   }

   return(
      <ThemeContext.Provider value={theme}>
         <ThemeContextUpdate.Provider value={setToggleTheme} >
            {children}
         </ThemeContextUpdate.Provider>
      </ThemeContext.Provider>
   )
}