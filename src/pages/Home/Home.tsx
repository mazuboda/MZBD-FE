import Footer from "@components/Footer";
import HomeContent from "@components/HomeContent";
import Nav from '@components/Nav';
import { height } from "@mui/system";

const Home = () => {
  return (
    <div style={{
      background: "linear-gradient(180deg, rgba(254, 233, 241, 0.929759) 0%, rgba(254, 254, 254, 0.997017) 26.56%, rgba(253, 253, 253, 0.995313) 70.31%, rgba(254, 227, 236, 0.908416) 100%)",
      height: "3000px"
    }}>
      <Nav />
      <HomeContent />
      <Footer />
    </div >
  );
};

export default Home;