/* eslint-disable react-hooks/exhaustive-deps */
import { IEvents } from '../common/interfaces/Events';
import { getEventsByType } from '../common/api/functions/Events';
import { useEffect, useState } from 'react';
import { EventsItem } from './EventsItem';
type Props = {
    typeEvent:string
}
export const ListEvents:React.FC<Props> = ({typeEvent}) => {
    const [events,setEvents] = useState<IEvents[]>();
    const getEvents = () => {
        const eventsApi = getEventsByType(typeEvent);
        setEvents(eventsApi);
    };

    
   
    useEffect(() => {
        getEvents();
    },[typeEvent]);


    return (
        <>
            <div className="container-list ">
                <div className="container-grid  bold ">
                    {
                        events?.map((eventBusiness) => (
                            <EventsItem key={eventBusiness.id} {...eventBusiness} />
                        ))
                    }
                   
                </div>
            </div>
        </>
    )
}


