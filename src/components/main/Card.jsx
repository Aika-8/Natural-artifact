import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../main/Card.css";
import { cards } from "../../utils/constants/cards";
import { MoreDetailed } from "../UI/Button/Button";
import { useEffect, useRef, useState } from "react";

export const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesPerView = windowWidth > 1024 ? 4 : 1;
  const totalSlides = cards.length;

  const handlePrev = () => swiperRef.current.swiper.slidePrev();
  const handleNext = () => swiperRef.current.swiper.slideNext();

  const getVisibleDots = () => {
    const maxDots = 3;
    let start = Math.max(0, currentIndex - 1);
    let end = Math.min(totalSlides, start + maxDots);
    if (end - start < maxDots) start = Math.max(0, end - maxDots);
    return cards
      .slice(start, end)
      .map((_, idx) => Math.max(0, currentIndex - 1) + idx);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[26px] w-full">
      <Swiper
        ref={swiperRef}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        className="w-full flex justify-center items-center"
      >
        {cards?.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex justify-center items-center"
          >
            <div className="w-[255px] h-[493px] border border-border-color">
              <div className="bg-premium-black w-full h-[180px] overflow-hidden">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-[120px] h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center px-4 py-4">
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <h1 className="text-2xl text-almost-white">{item.title}</h1>
                  <p className="text-base text-card-text-color">
                    {item.description}
                  </p>
                  <MoreDetailed style={{ marginTop: "8px" }}>
                    Подробнее
                  </MoreDetailed>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {windowWidth > 1024 && (
        <div className="flex items-center gap-4 mt-4 text-almost-white">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-[25px] h-[25px] flex items-center justify-center text-lg ${
              currentIndex === 0
                ? "bg-[rgba(137,157,157,1)] cursor-not-allowed"
                : "bg-[rgba(186,226,73,1)]"
            }`}
          >
            &#8592;
          </button>
          {currentIndex + 1} из {totalSlides}
          <button
            onClick={handleNext}
            disabled={currentIndex >= totalSlides - slidesPerView}
            className={`w-[25px] h-[25px] flex items-center justify-center text-lg ${
              currentIndex >= totalSlides - slidesPerView
                ? "bg-[rgba(137,157,157,1)] cursor-not-allowed"
                : "bg-[rgba(186,226,73,1)]"
            }`}
          >
            &#8594;
          </button>
        </div>
      )}

      {windowWidth <= 1024 && (
        <div className="flex items-center gap-2 mt-4">
          {getVisibleDots().map((dotIndex) => (
            <div
              key={dotIndex}
              onClick={() => swiperRef.current.swiper.slideTo(dotIndex)}
              className={`w-[10px] h-[10px] rounded-full cursor-pointer ${
                dotIndex === currentIndex
                  ? "bg-[rgba(186,226,73,1)]"
                  : "bg-[rgba(11,25,25,1)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
