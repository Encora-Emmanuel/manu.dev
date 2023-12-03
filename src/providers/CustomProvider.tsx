import React, {
  createContext,
  useContext,
  useState,
  FunctionComponent,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { Color } from "../styles/colors";

const headerConfig = {
  fontFamily: ["'poppins'", "sans-serif"].join(","),
};

interface ThemeContextProps {
  background: string;
  setBackground: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

interface LanguageContextProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  showLanguageModal: boolean;
  setShowLanguageModal: Dispatch<SetStateAction<boolean>>;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
};

const CustomProvider: FunctionComponent<{ children?: ReactNode }> = ({
  children,
}) => {
  const [background, setBackground] = useState<string>(Color.BackgroundLight);
  const [language, setLanguage] = useState<string>("en"); // Default language
  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(false);

  const theme = createTheme({
    typography: {
      fontFamily: `Montserrat, sans-serif`,
      fontWeightRegular: "500",
      h1: { ...headerConfig },
      h2: { ...headerConfig },
      h3: { ...headerConfig },
      h4: { ...headerConfig },
      h5: { ...headerConfig },
      h6: { ...headerConfig },
    },
    palette: {
      background: {
        default: background,
      },
    },
  });

  const themeContextValue: ThemeContextProps = {
    background,
    setBackground,
  };

  const languageContextValue: LanguageContextProps = {
    language,
    setLanguage,
    showLanguageModal,
    setShowLanguageModal,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LanguageContext.Provider value={languageContextValue}>
        <EmotionThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </EmotionThemeProvider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default CustomProvider;
