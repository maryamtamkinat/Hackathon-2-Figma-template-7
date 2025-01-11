import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Newstyles from "@/components/Newstyles";
import Ourcategories from "./ourproducts/topcategories";
import Featuredproduct from "./ourproducts/featuredproducts";
import Ourproducts from "./ourproducts/page";


export default function Home() {
  return (
   <>
   <Hero/>
   <Brands/>
   <Featuredproduct/>
   <Ourcategories/>
   <Newstyles/>
   <Ourproducts/>
   </>
  );
}
