
const productsArray = [
    {
        id: "1",
        title: "Cold Black Coffee",
        price: 150.00,
        imageUrl : 'https://th.bing.com/th/id/R.71e19b4c922b8fa6a33365e5b3215703?rik=hk%2ftpzhRAycpnQ&pid=ImgRaw&r=0'
    },
    {
        id: "2",
        title: "Hot Black Coffee",
        price: 240.00,
        imageUrl : 'https://th.bing.com/th/id/R.1907e1a8105358d3878415bd542189d4?rik=iXf7SkmuftqLDg&pid=ImgRaw&r=0'

    },
    {
        id: "3",
        title: "Milk Coffee",
        price: 325.00,
        imageUrl : 'https://th.bing.com/th/id/OIP.731dy08emdOSmne0XQVqzQHaHa?pid=ImgDet&rs=1'

    },
    {
        id: "4",
        title: "Romantic Coffee",
        price: 400.00,
        imageUrl : 'https://th.bing.com/th/id/OIP.IhuggimlaZzE6n4LXZIlNQHaEK?pid=ImgDet&rs=1'

    },
    {
        id: "5",
        title: "Double Black Coffee",
        price: 550.00,
        imageUrl : 'https://th.bing.com/th/id/OIP.MZaSnoQ_5jL33CM8yggKIAHaF7?pid=ImgDet&rs=1'

    },
    {
        id: "6",
        title: "Ice Coffee",
        price: 180.00,
        imageUrl : 'https://th.bing.com/th/id/OIP.93EG2Rq0Fi0pr9lEDpUhxgHaEL?pid=ImgDet&rs=1'

    }
];


function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for id: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };