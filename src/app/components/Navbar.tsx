import { AppBar, Toolbar, IconButton } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import { INavbarProps } from '../common/interfaces/NavbarProps';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navbar: React.FC<INavbarProps> = ({ drawerWidth }) => {
    // const handleLogout = () => {

    // }
    return (
        <AppBar
            position='fixed'
            sx={{
                // width: { sm: `calc(100% - ${drawerWidth}px) ` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <div className='flex justify-between w-full items-center'>
                    <NavLink
                        to="/home"
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        to="/home/cotizador"
                    >
                        Cotizador
                    </NavLink>
                    <button className='bg-zinc-200 rounded-full'>
                       <Link to='/'>Cerrar Sesión</Link>
                        <AccountCircle />
                    </button>
                </div>


            </Toolbar>
        </AppBar>
    )
}