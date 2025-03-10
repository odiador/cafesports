import { votingData } from "@/utils/consts";

const TableWithData = () => {
    const total = votingData.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <div className="mt-8 overflow-x-auto border">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="bg-white text-black">
                        <th className="px-4 py-2">Juego</th>
                        <th className="px-4 py-2">Cantidad</th>
                        <th className="px-4 py-2">Porcentaje</th>
                    </tr>
                </thead>
                <tbody>
                    {votingData.map((item, index) => (
                        <tr key={index} className="even:bg-white/5">
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.cantidad}</td>
                            <td className="px-4 py-2">{((item.cantidad / total) * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableWithData;
