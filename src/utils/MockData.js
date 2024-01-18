const products = [
    {
        id: '1',
        name: 'Orquídea Phalaenopsis',
        price: 1000,
        category: 'plants',
        img: 'https://brote.uy/3115-large_default/orquidea-phal-en-maceta-2020.jpg',
        stock: 25,
        description: 'Orquídea Phalaenopsis con maceta'
    },
    {
        id: '2',
        name: 'Cactus Euphorbia',
        price: 1000,
        category: 'plants',
        img: 'https://brote.uy/1494-large_default/cactus-euphorbia.jpg',
        stock: 20,
        description: 'Cactus Euphorbia con maceta'
    },
        {
        id: '3',
        name: 'Ficus Ginseng',
        price: 1200,
        category: 'plants',
        img: 'https://brote.uy/3861-large_default/ficus-ginseng.jpg',
        stock: 10,
        description: 'Ficus Ginseng con maceta'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)   
    })
}

export const getProductsAsync = () => {
    return fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
}