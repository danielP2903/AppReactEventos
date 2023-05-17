import { ListEvents } from "../components/ListEvents"

export const NocturnoPage = () => {
    const typeEventSearch = 'NOCTURNO'

    return (
        <div className="p-8">
            <h5 className="text-2xl font-extrabold  text-blue-900 my-8 underline decoration-solid">Celebra y Baila con lo Mejor de la Región</h5>
            <hr />
            <ListEvents typeEvent={typeEventSearch} />
        </div>
    )
}