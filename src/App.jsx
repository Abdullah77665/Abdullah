import Home from "./pages/Home"
import "./index.css"
export default function App() {

  
let crd =[
  {
image:"public/image/card-1.png",
tital:"Zinger "
  },
  {
image:"public/image/card-2.png",
tital:"Zinger-2"
  },
  {
image:"public/image/card3.png",
tital:"Zinger-3"
  },
  {
image:"public/image/card-1.png",
tital:"Zinger-4"
  },

]
let seller=[
  {
    image:"public/image/card-4.png",
tital:"Krunch Burger",
price:270,
  },
  {
    image:"public/image/card-5.png",
tital:"Combo",
price:460,
  },
  {
    image:"public/image/card-6.png",
tital:"Hot Wings Bucket",
price:370,
  },
  {
    image:"public/image/card-7.png",
tital:"Mighty Zinger",
price:970,
  },
]

  let product = [
    {
      image: "public/image/card-7.png",
      title: "Twister Combo",
      description: "Twister + 1 Regular fries + 1 Regular drink",
      price: 670,
      button: "ADD TO BUCKET"
    },
    {
      image: "public/image/card-8.png",
      title: "Zinger Stacker",
      description: "1 Zinger Stacker + 1 Regular fries + 1 Regular ",
      price: 850,
      button: "ADD TO BUCKET"
    },
    {
      image: "public/image/card-9.png",
      title: "Crispy Duo Box",
      description: "Turn up the fun with 5 pcs Hot & Crispy Chicken ",
      price: 1250,
      button: "ADD TO BUCKET"
    },
    {
      image: "public/image/card-10.png",
      title: "Family Festival 3",
      description: "An ultimate meal for the fam. It includes Zinger",
      price: 2450,
      button: "ADD TO BUCKET"
    },
]

  return <div>
    <Home product={product} crd={crd} seller={seller}/>
  </div>
}
