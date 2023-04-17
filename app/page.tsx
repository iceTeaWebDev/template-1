import Document from '@/components/Document'

async function getData() {
  const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/product', { cache: 'no-store' })
  const products = await data.json()
  return products
}

export default async function Home() {
  const data = await getData();
  return (
    <Document product={data.data}/>
  )
}
