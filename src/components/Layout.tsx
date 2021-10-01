import Titulo from "./Titulo"

interface LayoutProps{
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
return (
    <div className={`
        w-4/5 text-lg text
        text-yellow-400 rounded-md border-green-900 border-2
    `}>
        <Titulo>
            {props.titulo}
        </Titulo>
        <div className="p-6">
            {props.children}

        </div>



    </div>

    
)
}