import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const CreateProduct = () => {
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [published, setPublished] = useState()

    const userEmail = useSelector(state => state.currentUser)

    const handleSubmit = (e) => {
        console.log(localStorage.token)
        console.log(userEmail)
        e.preventDefault()
        axios.post('http://localhost:3000/api/v1/products', JSON.stringify({
            "product": {
                "title": title,
                "price": Number(price),
                "published": published === "yes" ? true : false,
            }
        }), {
            headers: {"content-type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}`}
        }).then(res => {
            console.log('Product CREATED? ', res)
        }).catch(error => console.error(error))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Product Title</label>
            <input id="title" onChange={(e) => { setTitle(e.target.value)}} />
            <label htmlFor="price">Price</label>
            <input id="price" onChange={(e) => { setPrice(e.target.value)}} />
            <label htmlFor="published">Published</label>
            <input id="published" onChange={(e) => { setPublished(e.target.value)}} />
            <button type="submit">Create</button>
        </form>
    )
}

export default CreateProduct;