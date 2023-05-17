import { Link } from "react-router-dom"
import { IEvents } from "../common/interfaces/Events"

export const EventsItem:React.FC<IEvents> = ({...events}) => {
    return (
        <>
        
           <div className="box-shadow container-item p-4 shadow-gray-300 shadow-2xl	 ">
                        <div className="flex flex-col items-center gap-4">
                        <p >{events.name}</p>
                        <img
                            src={events.img}
                            alt="fulleventos"
                            className='w-full h-15 object-cover logo contrast-125'
                        />
                        </div>

                        <div className="font-sans text-xs font-extralight tracking-wider text-justify	 flex flex-col gap-4 p-12">
                            <div className="flex justify-between font-bold	">
                            <p className="font-bold">Tipo</p>
                            <p>{events.type}</p>
                            </div>
                            {/* <p>{events.description}</p> */}
                            <div className="flex justify-between font-bold	">
                            <p>Duración:</p>
                            <p >{events.duration}</p>
                            </div>
                            <div className="flex justify-between font-bold	"> 
                            <p>Precio:</p>
                            <p >${events.price}</p>
                            </div>
                            <Link className="card-text text-sky-400	underline " to={`/home/event/${events.id}`}>Ver Detalles..</Link>
                        </div>
                    </div>
        </>
    )
}