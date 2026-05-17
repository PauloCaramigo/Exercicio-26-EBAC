import {cardapio} from "../../public/cardapio"

export default function Cardapio() {
    return (
        <>
            <h2 className="font-bold flex justify-center text-4xl mb-10">Cardapio</h2>

            <ul className="gap-4 flex justify-center">
                {
                    cardapio.map((item) => (
                        <li key={item.nome} className="border p-4 w-100">
                            <img src="https://placehold.co/192x192" alt="img-prato" className="h-16 w-16"/>
                            <h3 className="font-bold">{item.nome}</h3>
                            <p>{item.desc}</p>
                            <p>{item.preco}</p>

                            <button className="border rounded-lg px-4 py-2 hover:cursor-pointer" onClick={
                                () => window.dispatchEvent(new CustomEvent("adicionarPedido", {detail: item}))
                            }>Adicionar</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}