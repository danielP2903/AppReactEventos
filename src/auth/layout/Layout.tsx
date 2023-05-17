import { Grid } from '@mui/material';
import { ILayoutProps } from '../../app/common/interfaces/LayoutProps';
export const Layout:React.FC<ILayoutProps> = ({children}) => {
    return(
    <Grid 
    container
    spacing={0}
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{minHeight: '100vh', backgroundColor:'primary.main',p:4}}
    >
        {children}
    </Grid>
    )
}