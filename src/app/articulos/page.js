import { getArticulos } from '@/lib/actions'
import Articulos from '@/components/Articulos'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const articulos = await getArticulos()
           
    return (
        <Articulos articulos={articulos} />  
    )
}
