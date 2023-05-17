
import { PriceItemIndividual } from "../common/interfaces/Price";
type props = {
    cotizacion:PriceItemIndividual[]
}
export const CotizadorValue:React.FC<props> = ({cotizacion}) => {

    const total = cotizacion.reduce((sum, item) => sum + (item.price || 0), 0);

    return (
        <div className="shadow-2xl mt-4 p-12 flex flex-col gap-3">
            <h1 className="bold underline">COTIZACION DE LOS SERVICIOS ELEGIDOS</h1>
            {
                    cotizacion.map((cotizacion) => (

                    <div className="flex justify-between capitalize" key={cotizacion.name}>
                    <div>
                    <p className="bold">Servicio Elegido</p>
                    <p>{cotizacion.name}</p>
                    </div>
                    <div>
                    <p className="bold">Precio del servicio</p>
                    <p>{cotizacion?.price?.toLocaleString()}</p>
                    </div>
                    </div>
                    ))
            }
                <hr />
            
            <div className="bold mt-2 flex justify-between">
                <div>TOTAL</div>
                <h3>${total.toLocaleString()}</h3>
            </div>
        </div>
    )
}