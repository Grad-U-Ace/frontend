export default function ProductDetail({ params }: { params: { slug: string } }) {
    return (
        <div>
            <h1>Product Detail</h1>
            <p>Product ID is {params.slug} </p>
        </div>
    )
}