import Grid from "./components/Grid"
import Herosection from "./components/Herosection"
import ProductsList1 from "./components/ProductsList1"
import ProductsList2 from "./components/ProductsList2"
import Xscrollwrapper from "./components/xscrollwrapper"

function page (){
  return (
    <><Herosection /><ProductsList1 /><ProductsList2 /><Grid /> <Xscrollwrapper /></>
  )
}
 
export default page