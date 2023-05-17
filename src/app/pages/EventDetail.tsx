import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getEventsById } from "../common/api/functions/Events";
import { IEvents } from '../common/interfaces/Events';
import { ButtonBack } from '../components/buttonBack';

export const EventDetailPage = () => {
    console.log('se renderizo event detail');
    
    const {id} = useParams();
    
    const [events,setEvents] = useState<IEvents>();
    const getEventById = () => {
      const eventFound =  getEventsById(Number(id));
      setEvents(eventFound[0]);
      
    } 

 

    useEffect(() => {
       getEventById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);
    

    return (
        <div className='mt-24'>

            <ButtonBack />
        <div className='pt-24 p-24 mr-5 ml-5 flex shadow-2xl justify-evenly gap-12'>

            <div className='flex flex-col max-h-screen'>
            <h3 className='bold text-7xl'>{events?.name}</h3>
            <div className='shadow-2xl w-80 h-full p-6'>
                <div className='flex flex-col gap-6'>
                    <img
                        src={events?.img}
                        alt="fulleventos"
                        className='w-full h-15 object-cover logo contrast-125'/>
                     <div className=' flex gap-4 flex-col'>
                     <p>{events?.description}</p>                
                     <p ><b>La duración es:</b> {events?.duration}</p>
                     <p> <b>Precio: </b>${events?.price}</p>
                     </div>
                </div>
            </div>
            </div>

                <div className='shadow-2xl shadow-gray-300 p-4 flex flex-col'>
                    <h3 className='bold font-medium uppercase tracking-widest text-center underline'>Incluye:</h3>
                    {
                        events?.itemsInclude.map((item) => (
                            <div className='mt-6'>
                                {/* <img style={{width:'200px', height:'200px'}} src={image} alt="" /> */}
                                <ol className='list-disc p-4'>
                                    <li>
                                    {item}
                                    </li>
                                </ol>
                            </div>
                        ))
                    }
                </div>
        </div>
        </div>
    )

}