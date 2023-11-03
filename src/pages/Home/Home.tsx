import HomeContent from "@components/HomeContent";

const Home = () => {
  return (
    <div style={{
      background: "linear-gradient(180deg,rgba(254, 233, 241, 0.929759) 0%,rgba(254, 254, 254, 0.997017) 26.56%,rgba(253, 253, 253, 0.995313) 70.31%,rgba(254, 227, 236, 0.908416) 100%)",
      paddingTop: "46px",
    }}>
      <HomeContent />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;