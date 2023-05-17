import { ArrowBack } from '@mui/icons-material';

export const ButtonBack = () => {
    return (
        <>
            <div className="flex items-center flex-col  w-1/2">
                <button
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-300 focus:outline-none"
                    onClick={() => window.history.back()}
                >
                    <ArrowBack className="w-6 h-6" />
                </button>
                <span className="ml-2 text-gray-700 uppercase">Regresar</span>
            </div>
        </>
    )
}