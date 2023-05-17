import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";
import {red} from "@mui/material/colors";

export const PurpleTheme:Theme = createTheme({
    palette:{
        primary:{
            main: '#022154'
        },
        secondary:{
            main:'#543884'
        },
        error:{
            main:red.A400
        }
    }
}
)