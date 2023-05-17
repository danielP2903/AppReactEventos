import { Button, Grid, TextField, Typography } from '@mui/material';
import logo from '../../assets/img/logo.jpg';
import { Layout } from '../layout/Layout';
import {  useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    const navigate = useNavigate();
    const handleCloseSession = () => {
        navigate('/home')

    }
    return(
        <>
        <Layout >
            <Grid
            item
            className="box-shadow"
            xs={3}
            sx={{backgroundColor:'white', p:3,borderRadius:2}}
            >
                <div className='container-logo'>
                <img 
                src={logo} 
                alt="fulleventos"
                className='logo'
                />
                </div>
                <Typography  
                variant='h5'
                textAlign="center" 
                fontWeight="fontWeightMedium" 
                sx={{mb:1, mt:2,}}>Iniciar Sesión</Typography>
                <form>
                    <Grid container>
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField 
                                label='Correo'
                                type='email'
                                placeholder='Ingrese el correo'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField 
                                label='Contraseña'
                                type='password'
                                placeholder='Ingrese su contraseña'
                                fullWidth
                            />
                        </Grid>

                        <Grid container spacing={2} sx={{mb:2, mt:1}}>
                            <Grid item xs={12} sm={12}>
                                <Button 
                                variant='contained'
                                fullWidth
                                onClick={handleCloseSession}
                                >
                                    {/* <Link to={'/home'}></Link> */}
                                    Login
                                </Button>                                
                            </Grid>
                            {/* <Grid item xs={12} sm={6}>
                                <Button 
                                variant='contained'
                                fullWidth
                                >
                                    Login
                                </Button>
                                
                            </Grid> */}


                        </Grid>

                    </Grid>
                </form>
            </Grid>   
            </Layout>

        </>
    )
}