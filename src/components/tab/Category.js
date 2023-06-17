import material4 from "../../assets/germanwool01.png";
import material5 from "../../assets/material05.png";
import material6 from "../../assets/germanwool02.png";
import material7 from "../../assets/material07.png";
import material8 from "../../assets/germanwool03.png";
import material9 from "../../assets/germanwool04.png";
import cufflinks1 from "../../assets/cufflinks01.png";
import cufflinks2 from "../../assets/cufflinks02.png";
import cufflinks3 from "../../assets/cufflinks03.png";
import cufflinks4 from "../../assets/cufflinks04.png";
import cufflinks5 from "../../assets/cufflinks05.png";
import cufflinks6 from "../../assets/cufflinks06.png";
import watch1 from "../../assets/watch01.png";
import watch2 from "../../assets/watch02.png";
import watch3 from "../../assets/watch03.png";
import watch4 from "../../assets/watch04.png";
import watch5 from "../../assets/watch05.png";
import watch6 from "../../assets/watch06.png";
import bracelet1 from "../../assets/bracelet01.png";
import bracelet2 from "../../assets/bracelet02.png";
import bracelet3 from "../../assets/bracelet03.png";
import bracelet4 from "../../assets/bracelet04.png";
import ring1 from "../../assets/ring01.png";
import ring2 from "../../assets/ring02.png";

// Specifically used for making of senator wears in the country. Has natural crimp, which results in an incredible soft and lightweight fabrics which translates into plush, luxurious fabrics with silky feel.

const material = {
  name: "German wool",
  description: "",
  price: 3000,
  color: "Different colors",
  image: material4,
  item: { image: material6, name: "German wool", color: "Soft grey" },
  items: [
    { name: "Cashmere", price: 6000, image: material5, color: "Eerie black" },
    {
      name: "Cashmere",
      price: 6000,
      image: material7,
      color: "Cornflower blue",
    },
    {
      name: "German wool",
      price: 3000,
      image: material8,
      color: "Deep blue",
    },
    {
      name: "German wool",
      price: 3000,
      image: material9,
      color: "Brown Coffee",
    },
  ],
};
const wristwatch = {
  name: "Hublot",
  description:
    "High quality leather brand wristwatches. Luxury high quality design. Classic, durable",
  price: "",
  color: "",
  image: watch1,
  item: { image: watch2, name: "Rolex", color: "" },
  items: [
    { name: "Hublot", price: "", image: watch3, color: "" },
    {
      name: "Hublot",
      price: "",
      image: watch4,
      color: "",
    },
    {
      name: "Hublot",
      price: "",
      image: watch5,
      color: "",
    },
    {
      name: "Rolex",
      price: "",
      image: watch6,
      color: "",
    },
  ],
};
const cufflink = {
  name: "Cufflinks",
  description:
    "Cufflinks are instrumental in expressing your style, and exuding class in your outfit regardless of what you wear",
  price: "",
  color: "",
  image: cufflinks1,
  item: { image: cufflinks2, name: "Hublot", color: "" },
  items: [
    { name: "Hublot", price: "", image: cufflinks3, color: "" },
    {
      name: "Carter",
      price: "",
      image: cufflinks4,
      color: "",
    },
    {
      name: "Cufflink",
      price: "",
      image: cufflinks5,
      color: "",
    },
    {
      name: "Casio",
      price: "",
      image: cufflinks6,
      color: "",
    },
  ],
};
const bracelet = {
  name: "Beaded bracelet",
  description:
    "Beaded bracelets not just look fashionable but is also easy to wear and pull off. It adds a stylish finishing touch to any outfit - casual or formal",
  price: "",
  color: "Black",
  image: bracelet1,
  item: { image: bracelet2, name: "Beaded bracelet", color: "", price: "" },
  items: [
    { name: "Beaded bracelet", price: "", image: bracelet3, color: "" },
    {
      name: "Leather bracelet",
      price: "",
      image: bracelet4,
      color: "",
    },
    {
      name: "rings",
      price: "",
      image: ring2,
      color: "",
    },
    {
      name: "rings",
      price: "",
      image: ring1,
      color: "",
    },
  ],
};

export const allCategory = [
  { content: material, label: "Materials" },
  { content: cufflink, label: "Cufflinks" },
  { content: wristwatch, label: "Wristwatches" },
  { content: bracelet, label: "Bracelets & Rings" },
];

const [materials, cufflinks, watches, bracelets] = allCategory;
export const initialTabs = [materials, cufflinks, watches, bracelets];
