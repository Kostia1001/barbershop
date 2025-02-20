import EmblaCarousel from "./EmblaCarousel";
import Header from "./HeaderCarousel";
import Footer from "./FooterCarusel";
import "../Carousel/CSS/base.css";
import "../Carousel/CSS/embla.css";
import "../Carousel/CSS/sandbox.css";

import {
  man2,
  man3,
  man4,
  man6,
  man7,
  man8,
  man9,
  man11,
  man12,
  man13,
  man5,
} from "../../img/img";

const OPTIONS = { loop: true };
const SLIDES = [
  { img: man2 },
  { img: man3 },
  { img: man4 },
  { img: man6 },
  { img: man7 },
  { img: man8 },
  { img: man9 },
  { img: man11 },
  { img: man12 },
  { img: man13 },
  { img: man5 },
];

const CarouselIndex = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
);
export default CarouselIndex;
