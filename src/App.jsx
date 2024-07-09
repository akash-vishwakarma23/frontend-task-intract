import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ContentOne from "./components/ContentOne";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Reels from "./components/Reels";
import CenterContent from "./components/CenterContent";
import Loading from "./utils/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className=" w-full bg-[#080808] text-zinc-100">
      <Navbar />
      <ContentOne />
      <CenterContent />
      <Reels />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
