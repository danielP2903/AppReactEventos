import { ListEvents } from "../components/ListEvents"

export const InfantilPage = () => {
    const typeEventSearch = 'INFANTIL'
    return (
        <div className="p-8">
            <div className="mb-12">

            </div>
            <h6 className="text-2xl font-bold  text-blue-900 mb-8 underline decoration-wavy">Descubre nuestros eventos infantiles llenos de alegría y color</h6>
            <hr />
            <ListEvents typeEvent={typeEventSearch} />
        </div>

    )
}