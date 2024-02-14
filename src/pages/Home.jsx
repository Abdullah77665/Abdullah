import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

export default function Home({product ,crd,seller}) {


    return <div>

      
      <Header />
      <Main product={product} crd={crd} seller={seller} />
      <Footer />
    
  
    </div>
  
  }