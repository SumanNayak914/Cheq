import BrandVouchers from "../component/BrandVouchers";
import CheqHero from "../component/CheqHero";
import CreditArticlesSection from "../component/CreditArticlesSection";
import GetCashback from "../component/GetCashback";
import NewsSection from "../component/NewsSection";
import PayTogether from "../component/PayTogether";
import HeroSection from "./HeroSection";
import SecuritySection from '../component/SecuritySection'


const Home = () => {
    return (
       <>
       <div >
       <HeroSection/>
       <GetCashback/>
       <BrandVouchers/>
       <PayTogether/>
       <CheqHero/>
       <SecuritySection/>
       <CreditArticlesSection/>
       <NewsSection/>
       </div>
       </>
        
    )
}   

export default Home;