import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { PurpleTheme } from "./Purple"

export const AppTheme: React.FC<any> = ({ children }) => {

    return (
        <>
            <ThemeProvider theme={PurpleTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </>
    )

}