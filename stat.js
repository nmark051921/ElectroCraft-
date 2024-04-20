const btns=[
    {
        id: 1,
        name: 'Case'
    },
    {
        id: 2,
        name: 'CPU Cooler'
    },
    {
        id: 3,
        name: 'CPU'
    },
    {
        id: 4,
        name: 'Expansion Card'
    },
    {
        id: 5,
        name: 'Memory'
    },
    {
        id: 6,
        name: 'Monitor',
    },
    {
        id: 7,
        name: 'Motherboard'
    },
    {
        id: 8,
        name: 'Power Supply'
    },
    {
        id: 9,
        name: 'Peripherals'
    },
    {
        id: 10,
        name: 'Storage'
    },
    {
        id: 11,
        name: 'Video Card'
    },
];
const filters = [...new Set(btns.map((btn)=>
    {return btn}))]
    let i=0;
document.getElementById('btns').innerHTML = filters.map((btn)=>
{
    var {name, id} = btn;
    return(
       "<button class='fil-p' onclick='filteritems("+(id)+`)'>${name}</button>`
    )
}).join('')


const product = [
    {
        id: 1,
        image: 'image1.jpg',
        title: 'Galax NVIDIA® GeForce GTX 1650 EX Plus 1-Click OC 4gb 128bit GDdr6 Gaming Videocard',
        price: '₱8,425.00',
        category: 'videocard'
    },
    {
        id: 5,
        image: 'image2.jpg',
        title: 'Asrock RX 6600 8G CHALLENGER D 8gb 128bit GDdr6 Dual Fan Gaming Videocard',
        price: '₱8,425.00',
        category: 'cpu'
    },
    {
        id: 3,
        image: 'image3.jpg',
        title: 'MSI NVIDIA® GeForce RTX 3060 Ventus 2X OC 12gb 192bit GDdr6 Gaming Videocard LHR',
        price: '₱19,150.00',
        category: 'videocard'
    },
    {
        id: 1,
        image: 'image4.jpg',
        title: 'MSI NVIDIA® GeForce GTX 1650 D6 Ventus XS OC/XC OC V3 4gb 128bit GDdr6 Gaming Videocard',
        price: '₱8,750.00',
    },
    {
        id: 5,
        image: 'image5.jpg',
        title: 'PNY NVIDIA® GeForce RTX 3060 VERTO Dual Fan VCG30608DFBPB1 8gb 128bit GDdr6 Gaming Videocard',
        price: '₱18,205.00',
        category: 'videocard'
    },
    {
        id: 4,
        image: 'image6.jpg',
        title: 'Galax NVIDIA® GeForce RTX 4070 EX-Gamer PINK 12GB 192 BIT GDDR6X 47NOM7MD7KWH Videocard',
        price: '₱39,995.00',
        category: 'videocard'
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]

const filteritems = (a)=>{
    const fltercategories = categories.filter(item);
    function item(value){
        if(value.id==a){
            return(
                value.id
                )
        }
    }
    displayItem(fltercategories)
}

const displayItem = (_items) => {
    document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
        <h3>${title}</h3>
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <h2>$ ${price}.00</h2>
        <button> Add </button>
        </div>
        </div>`)

    }).join('')
}
displayItem(categories);

