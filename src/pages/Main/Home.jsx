import Navbar from "../../components/Navbar";
import Header from './homeComponents/Header'
import Guarantees from "./homeComponents/Guarantees";
import Skleton from "./homeComponents/Skeleton";
import Discount from "./homeComponents/Discount";
import LastSeen from './homeComponents/LastSeen'
import Footer from '../../components/Footer'
const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Header />
        <Guarantees />
        <Skleton />
        <Discount />
        <LastSeen />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
