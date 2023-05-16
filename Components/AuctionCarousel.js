import React from "react";
import Slider from "react-slick";
import AuctionCard from "./AuctionCard";
import { Box, IconButton } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

// import styles from "../styles/AuctionCarousel.module.css";

const AuctionCarousel = () => {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <IconButton
        className={className}
        style={{ ...style, backgroundColor: "transparent" }}
        onClick={onClick}
      >
        <ArrowLeft />
      </IconButton>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <IconButton
        className={className}
        style={{ ...style, backgroundColor: "transparent" }}
        onClick={onClick}
      >
        <ArrowRight />
      </IconButton>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "30px" }}>
      <Slider {...settings}>
        <div>
          <AuctionCard />
        </div>
        <div>
          <AuctionCard />
        </div>
        <div>
          <AuctionCard />
        </div>
        <div>
          <AuctionCard />
        </div>
        <div>
          <AuctionCard />
        </div>
        <div>
          <AuctionCard />
        </div>
      </Slider>
    </div>
  );
};

export default AuctionCarousel;
