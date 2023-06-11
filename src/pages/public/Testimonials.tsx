import React from "react";
import { Navigation } from "../../components/common/Navigation";
import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";

export const Testimonials = () => {
  return (
    <div>
      <Navigation />
      <Header
        headerTitle="Testimonials"
        headerSubTitle="Look what our users say"
      />
      <Footer />
    </div>
  );
};
