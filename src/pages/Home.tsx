import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { MainSectionFour } from "../components/main-section-four/MainSectionFour"
import { MainSectionOne } from "../components/main-section-one/MainSectionOne"
import { MainSectionThree } from "../components/main-section-three/MainSectionThree"
import { MainSectionTwo } from "../components/main-section-two/MainSectionTwo"

function Home() {
    return (
      <>
       <Header/>
       <main>
         <MainSectionOne />
         <MainSectionTwo />
         <MainSectionThree />
         <MainSectionFour />
       </main>
       <Footer />
      </>
    )
  }
  
  export default Home