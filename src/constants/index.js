import DSC05304 from '../photos/DSC05304.jpeg';
import DSC08185 from '../photos/DSC08185.jpeg';
import Portrait from '../photos/PortraitShot.avif';
import Event from '../photos/DSC05323.jpeg';
import Product from '../photos/DSC00884.jpeg';
import DSC00405 from '../photos/DSC00405.jpeg';
import DSC00436 from '../photos/DSC00436.jpeg';
import DSC01370 from '../photos/DSC01370.jpeg';

export const PUBLICATIONS = [
  "FORBES",
  "PORSCHE",
  "DUPONT REGISTRY",
  "CANVAS REBEL"
];

export const PORTFOLIO_ITEMS = [
  { label: "Automotive", src: DSC05304 },
  { label: "Detail Shot", src: DSC08185 },
  { lable: "Automotive", src: DSC01370 },
  { label: "Portrait", src: Portrait },
  { label: "Event", src: Event },
  { label: "Detail Shot", src: DSC00436 },
  { label: "Product", src: Product },
  { label: "Automotive", src: DSC00405 },
];

export const PRICING = {
  automotive: [
    {
      name: "Full Shoot",
      price: "350",
      // desc: "Perfect for showcasing your vehicle for personal or social use.",
      features: ["25 Stills" , "5 Rolling Shots"],
      featured: true,
      tag: "Most Popular",
    },
    {
      name: "Half Shoot",
      price: "175",
      features: ["10 Stills" , "5 Rolling Shots"],
    },
    {
      name: "Stills ONLY",
      price: "300",
      features: ["30 Stills"],
    },
    {
      name: "Rolling Shots ONLY",
      price: "150",
      features: ["10 Stills"],
    },
    {
      name: "Mini Shoots",
      price: "See prices below",
      features: ["$75 Option: 5 Still Images", "$100 Option: 3 Stills + 2 Rollers"],
    },
    {
      name: "Bring a Trailer Full Coverage",
      price: "2000",
      features: ["200 Images" , "Full coverage of Interior, Exterior, Engine Bay, Details, Etc"],
    },
    {
      name: "Subscription",
      price: ["625/month", " or $7200/year"],
      features: ["2 monthly customizeable photoshoots" , "40 high quality professional images each month", "All shoots are customized to fit your needs", "**Only five spots available**"],
    },
  ],
  portrait: [
    {
      name: "Graduation Shoot",
      price: "225",
      features: ["15 images"],
      featured: true,
      tag: "Most Popular",

    },
    {
      name: "Half Shoot",
      price: "175",
      features: ["10 images"],
    },
    {
      name: "Full Shoot",
      price: "350",
      features: ["20 images"],
    },
    {
      name: "Mini Session",
      price: "100",
      features: ["5 images"],
    },
  ],
  event: [
    {
      name: "Half-Day",
      price: "750",
      features: ["50+ Images", "2hrs-5hrs"],
    },
    {
      name: "Full Day",
      price: "1500",
      features: ["100+ Images", "5hrs+"],
      featured: true,
      tag: "Best Value",
    },
  ],
  product: [
    {
      name: "Studio Images",
      price: "25/image",
      features: ["With professional retouching"],
    },
    {
      name: "Studio Images",
      price: "12/image",
      features: ["No retouching"],
    },
    {
      name: "Lifestyle/Editorial Images",
      price: "20/image",
      features: [""],
    },
  ],
  prints: [
    {
      name: "Canvas Print on Wood Frame",
      price: "200",
      // desc: "Museum-quality giclée prints on archival paper.",
      features: ["All prints are 3ft x 4t"],
    },
    {
      name: "Custom sizes or non-canvas prints can be requested.",
      price: "$$$",
      desc: "Ways to request a custom print:",
      features: [
        "You can email me at automotivealex5@gmail.com",
        "You can text or call me at (805) 570-7277",
        "You can direct message me on Instagram.",
        "Fill out the form on the Contact page on this website"
      ],
    },
  ],
};

export const DISCOUNTS = [
  {
    pct: "",
    title: "Gear Recomendations",
    desc: ["Find my Camera Gear Here"],
    link: "https://www.amazon.com/shop/automotive_alex/list/3R3SL9BDWSC8Y?ref_=aip_sf_list_spv_ofs_mixed_d&ccs_id=a92ddfb3-a65c-4ac7-a44a-02c4c6ae9e2d",
  },
  {
    pct: "",
    title: "Garage Girls - Automotive Themed Accsessories",
    code: "AutoAlex",
    desc: "Discount on Automotive Themed Jewery and Other Accsessories",
    link: "https://www.garagegirlsjewelry.com/?sca_ref=2872034.g2ZUxoEJtr"
  },
  {
    pct: "",
    title: "Pordein Bags - Unique Purses",
    code: "AutoAlex",
    desc: "Discount on Dinosaur Purses, Shark Purses, and more!",
    link: "https://pordein.com/?sca_ref=4856946.HQ3LP0ZZTg"
  },
  {
    pct: "",
    title: "Pordein Bags - Unique Purses",
    code: "AutoAlex",
    desc: "Discount on Gym Clothes Here",
    link: "https://pirunclothing.com/"
  },
];

export const TABS = [
  { id: "automotive", label: "Automotive" },
  { id: "portrait", label: "Portrait" },
  { id: "event", label: "Event" },
  { id: "product", label: "Product" },
  { id: "prints", label: "Prints" },
];
