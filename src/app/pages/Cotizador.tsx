import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useForm } from '../common/hooks/useForm';
import { Button, FormControl, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCategories } from '../common/api/functions/Categories';
import { Category } from '../common/interfaces/Category';
import { getPricesItemsByCategory } from '../common/api/functions/Prices-items';
import { PriceItemIndividual } from '../common/interfaces/Price';
import { CotizadorValue } from './Cotizador-Value';
import { useCotizacion } from '../common/hooks/useCotization';
import { ButtonBack } from '../components/buttonBack';

export const Cotizador = () => {
    const {cotizacion ,handleCotizacion  } = useCotizacion();
    
    const {category,priceItem,onInputChange, onReset} = useForm({
        category: {},
        priceItem:{}
    });

    const [categories,setCategories] = useState<Category[]>()
    const [pricesItems,setPricesItems] = useState<PriceItemIndividual[]>()

 
    const getCategory = () => {
        const categoriesFound = getCategories();
        setCategories(categoriesFound);
    }

    const addItemCotization = () => {        
  
        handleCotizacion(priceItem);
    }
    

    const getItems = () => {
        const pricesItemsFound = getPricesItemsByCategory(category);
        setPricesItems(pricesItemsFound);
        
    };

    useEffect(() =>{
        getCategory();
    },[])
    
    useEffect(() => {
        getItems();
    },[category]);

    return (
        <>
        <div className="relative  mt-10">
                <div className="absolute inset-0">
                    <img className="object-cover opacity-40 h-full w-full" src="https://www.decorablog.com/wp-content/2014/10/Decorar-fiestas-infantiles.jpg" alt="Background" />
                </div>
                <div className="relative z-10">
                    <h1 className="text-fuchsia-900	 uppercase text-ellipsis overflow-hidden font-sans text-center text-6xl p-12 bg-clip-text">
                    Cotiza nuestros servicios individuales                   
                     </h1>
                </div>
            </div>
        <ButtonBack />
        <div className="p-24 w-1/2  ">        

            <div className='shadow-2xl flex  flex-col items-center p-4'>
                <h2 className='bold '>Nuestros Servicios</h2>
                <FormControl  sx={{ m: 1, width: 300 }} >
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      placeholder='Selecciona la categoria'
                      value={category}
                      name='category'
                      label="Categoria"
                      onChange={onInputChange}
                    >
                        {
                            categories?.map((category) =>(
                                <MenuItem key={category.idCategory} value={category.idCategory}>{category.name}</MenuItem>
                            ))
                        }
                    </Select>
                    </FormControl>       
                    <FormControl  sx={{ m: 1, width: 300 }} >

                    <InputLabel id="prices-individuals">Precios Individuales</InputLabel>
                    <Select
                      labelId="prices-individuals"
                      id="prices-individuals"
                      placeholder='Selecciona un item'
                      value={priceItem}
                      name='priceItem'
                      label="Precios Individuales"
                      onChange={onInputChange}
                    >
                        {
                            pricesItems?.map((price) =>(
                                <MenuItem key={price.name} value={price} >{price.name} - {price.price}</MenuItem>
                            ))
                        }
                    </Select>
                    </FormControl>       
                    <Button className='w-2/5' variant="contained" onClick={() => addItemCotization()}>Agregar</Button>
            </div>
            <CotizadorValue cotizacion={cotizacion}/>
        </div>
        </>
        
    )
}