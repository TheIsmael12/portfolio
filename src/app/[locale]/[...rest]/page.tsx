import { notFound } from 'next/navigation'

// Cualquier ruta desconocida dentro de un idioma muestra la 404 traducida con la cabecera del portfolio
export default function CatchAllPage() {

    notFound()

}
