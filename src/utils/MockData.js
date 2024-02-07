export const products = [
    {
        name: 'Orquídea Phalaenopsis',
        price: 1000,
        category: 'Plantas',
        image: 'https://brote.uy/3115-large_default/orquidea-phal-en-maceta-2020.jpg',
        stock: 25,
        description: 'Orquídea Phalaenopsis con maceta'
    },
    {
        name: 'Cactus Euphorbia',
        price: 1000,
        category: 'Plantas',
        image: 'https://brote.uy/1494-large_default/cactus-euphorbia.jpg',
        stock: 20,
        description: 'Cactus Euphorbia con maceta'
    },
    {
        name: 'Ficus Ginseng',
        price: 1200,
        category: 'Plantas',
        image: 'https://brote.uy/3861-large_default/ficus-ginseng.jpg',
        stock: 10,
        description: 'Ficus Ginseng con maceta'
    },
    {
        name: 'Porta Maceta Redondo',
        price: 140,
        category: 'Macetas',
        image: 'https://brote.uy/2863-large_default/porta-maceta-elegance-redondo-n5.jpg',
        stock: 5,
        description: 'Porta Maceta Elegance Redondo'
    },
    {
        name: 'Maceta de cerámica',
        price: 500,
        category: 'Macetas',
        image: 'https://brote.uy/3032-large_default/maceta-con-plato.jpg',
        stock: 0,
        description: 'Maceta Cerámica con plato'
    },
    {
        name: 'Maceta mujer',
        price: 800,
        category: 'Macetas',
        image: 'https://brote.uy/2776-large_default/maceta-hombre.jpg',
        stock: 12,
        description: 'Maceta mujer'
    },
    {
        name: 'Canasto Natural Grande',
        price: 950,
        category: 'Macetas',
        image: 'https://brote.uy/3354-large_default/canasto-natural-m.jpg',
        stock: 5,
        description: 'Canasto de fibra natural, tamaño grande'
    },
    {
        name: 'Maceta Luna Pequeña',
        price: 450,
        category: 'Macetas',
        image: 'https://brote.uy/2822-large_default/maceta-luna.jpg',
        stock: 7,
        description: 'Maceta de plástico 100% reciclable, tamaño pequeño'
    },
    {
        name: 'Maceta Terrazo',
        price: 450,
        category: 'Macetas',
        image: 'https://brote.uy/2549-large_default/maceta-terrazo-cilindro-s.jpg',
        stock: 7,
        description: 'Maceta cilíndrica de plástico 100% reciclable, tamaño grande'
    },
    {
        name: 'Bolso jardinero',
        price: 3200,
        category: 'Accesorios',
        image: 'https://brote.uy/2567-large_default/bolso-jardinero.jpg',
        stock: 10,
        description: 'Kit Bolso de jardín con herramientas'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)   
    })
}

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const categories = [...new Set(products.map(product => product.category))];
            resolve(categories);
        }, 500);
    });
};


export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)   
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === categoryId))
        },500)   
    })
}

export const getProductsAsync = () => {
  return fetch('https://fakestoreapi.com/products').then((res) => res.json())
}