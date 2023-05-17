/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { IEvents } from '../common/interfaces/Events';
import { getEventsByName } from '../common/api/functions/Events';
import { Autocomplete, TextField } from '@mui/material';

export const Search:React.FC<any> = ({query,handleQueryChange,setId}) => {


    const [events, setEvents] = useState<IEvents[]>();
    
    const onHandleQuery = (event:any) => {
        handleQueryChange(event.target.value)
    }

    const setIdEvent = (_event:unknown,value:any) => {
        
        setId(value?.id);
    }

    const getEventsByQuery = () => {
        if(query === undefined) return;
        const eventsFound = getEventsByName(query);
        setEvents(eventsFound);

    };

    useEffect(() => {
        getEventsByQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);
    return (
        <div className='flex flex-col p-2'>
            <Autocomplete
                className='bg-white'
                disablePortal
                id="combo-box-demo"
                options={events?.length ? events : []}
                getOptionLabel={(event) => event.name}
                onKeyUp={onHandleQuery}
                onChange={ setIdEvent}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Eventos" />}
            />


        </div>
    )
}