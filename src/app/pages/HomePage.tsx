import { InfantilPage } from "./Infantil";
import { NocturnoPage } from "./Nocturno";
import { Search } from './Search';
import { useState, useEffect } from 'react';
import { EventsItem } from '../components/EventsItem';
import { IEvents } from '../common/interfaces/Events';
import { getEventsById } from '../common/api/functions/Events';

export const HomePage = () => {
    const [queryWrite, setQuery] = useState('');
    const [events, setEvents] = useState<IEvents[]>();

    const [idEvent, setIdEvent] = useState<number>(0);
    const handleQueryChange = (value: string) => {
        setQuery(value);
    };

    const setIdEventValue = (idEventValue: number) => {
        setIdEvent(idEventValue);

    }

    const getEventByValueId =() => {
        const eventsFound = getEventsById(idEvent);
        setEvents(eventsFound);
        console.log(events);

    };

    useEffect(() => {
        getEventByValueId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idEvent])

    return (
        <>
      
            <div className="relative  mt-10">
                <div className="absolute inset-0">
                    <img className="object-cover opacity-40 h-full w-full" src="https://www.decorablog.com/wp-content/2014/10/Decorar-fiestas-infantiles.jpg" alt="Background" />
                </div>
                <div className="relative z-10">
                    <h1 className="text-fuchsia-900 text-center uppercase text-ellipsis overflow-hidden font-sans text-6xl p-12 bg-clip-text">
                        Nuestros planes
                    </h1>
                </div>
            </div>
         
            <div className='mt-24 pl-12 pr-12'>
                
            <h6 className="text-2xl font-bold  text-blue-900 mb-8 underline">Busca un evento</h6>
                <hr />
                <Search handleQueryChange={handleQueryChange} query={queryWrite} setId={setIdEventValue} />

            </div>
            {
                (events && events.length > 0) ?
                    <div className="flex justify-center">
                        <EventsItem {...events[0]} />
                    </div>
                    :
                    <div>
                        <InfantilPage />
                        <NocturnoPage />
                    </div>
            }


        </>
    )
}