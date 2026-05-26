export type PaintingImage = {
  id: string;
  alt: string;
  src?: string;
  gradient?: string;
};

export type Painting = {
  slug: string;
  title: string;
  dimensions: string;
  price: string;
  images: PaintingImage[];
};

export type CatalogSpread = {
  slug: string;
  title: string;
  pageImages: string[];
};

const paintingAssetBaseUrl = "https://assets.zicassoart.com/paintings";
const topHeroAssetBaseUrl = "https://assets.zicassoart.com/Top hero paintings";

export const paintings: Painting[] = [
  {
    slug: "prayers-at-the-koisel",
    title: "Prayers At The Koisel",
    dimensions: "",
    price: "",
    images: [
      {
        id: "prayers-at-the-koisel",
        alt: "Prayers At The Koisel painting",
        src: `${paintingAssetBaseUrl}/paintings.jpg`,
      },
    ],
  },
  {
    slug: "a-lovely-morning",
    title: "A Lovely Morning",
    dimensions: "",
    price: "",
    images: [
      {
        id: "a-lovely-morning",
        alt: "A Lovely Morning painting",
        src: `${paintingAssetBaseUrl}/paintings2.jpg`,
      },
    ],
  },
  {
    slug: "blowing-of-the-shofor",
    title: "Blowing Of The Shofor",
    dimensions: "",
    price: "",
    images: [
      {
        id: "blowing-of-the-shofor",
        alt: "Blowing Of The Shofor painting",
        src: `${paintingAssetBaseUrl}/paintings3.jpg`,
      },
    ],
  },
  {
    slug: "the-fruits-of-bikurim",
    title: "The Fruits Of Bikurim",
    dimensions: "",
    price: "",
    images: [
      {
        id: "the-fruits-of-bikurim",
        alt: "The Fruits Of Bikurim painting",
        src: `${paintingAssetBaseUrl}/paintings5.jpg`,
      },
    ],
  },
  {
    slug: "the-smell-of-sunflowers",
    title: "The Smell Of Sunflowers",
    dimensions: "",
    price: "",
    images: [
      {
        id: "the-smell-of-sunflowers",
        alt: "The Smell Of Sunflowers painting",
        src: `${paintingAssetBaseUrl}/paintings6.jpg`,
      },
    ],
  },
  {
    slug: "yerusalem-we-are-waiting-for",
    title: "The Yerusalem We Are Waiting For",
    dimensions: "",
    price: "",
    images: [
      {
        id: "yerusalem-we-are-waiting-for",
        alt: "The Yerusalem We Are Waiting For painting",
        src: `${paintingAssetBaseUrl}/paintings7.jpg`,
      },
    ],
  },
  {
    slug: "torah-hu-chayeinu",
    title: "Torah Hu Chayeinu",
    dimensions: "",
    price: "",
    images: [
      {
        id: "torah-hu-chayeinu",
        alt: "Torah Hu Chayeinu painting",
        src: `${paintingAssetBaseUrl}/paintings8.jpg`,
      },
    ],
  },
  {
    slug: "vintage-airballoon",
    title: "Vintage Airballoon",
    dimensions: "",
    price: "",
    images: [
      {
        id: "vintage-airballoon",
        alt: "Vintage Airballoon painting",
        src: `${paintingAssetBaseUrl}/paintings9.jpg`,
      },
    ],
  },
  {
    slug: "mount-sinai-good",
    title: "Mount Sinai Good",
    dimensions: "",
    price: "",
    images: [
      {
        id: "mount-sinai-good",
        alt: "Mount Sinai Good painting",
        src: `${paintingAssetBaseUrl}/paintings11.jpg`,
      },
    ],
  },
  {
    slug: "portrait",
    title: "Portrait",
    dimensions: "",
    price: "",
    images: [
      {
        id: "portrait",
        alt: "Portrait painting",
        src: `${paintingAssetBaseUrl}/paintings12.jpg`,
      },
    ],
  },
  {
    slug: "the-light-of-our-life",
    title: "The Light Of Our Life",
    dimensions: "",
    price: "",
    images: [
      {
        id: "the-light-of-our-life",
        alt: "The Light Of Our Life painting",
        src: `${paintingAssetBaseUrl}/paintings13.jpg`,
      },
    ],
  },
  {
    slug: "still-life-study",
    title: "Still Life Study",
    dimensions: "",
    price: "",
    images: [
      {
        id: "still-life-study",
        alt: "Still Life Study painting",
        src: `${paintingAssetBaseUrl}/paintings14.jpg`,
      },
    ],
  },
  {
    slug: "untitled-1",
    title: "Untitled 1",
    dimensions: "",
    price: "",
    images: [
      {
        id: "untitled-1",
        alt: "Untitled 1 painting",
        src: `${paintingAssetBaseUrl}/Untitled-1.jpg`,
      },
    ],
  },
];

export const heroPaintingSlides = [
  "top hero paintings.jpg",
  "top hero paintings2.jpg",
  "top hero paintings3.jpg",
  "top hero paintings4.jpg",
  "top hero paintings5.jpg",
  "top hero paintings6.jpg",
  "top hero paintings7.jpg",
  "top hero paintings8.jpg",
  "top hero paintings9.jpg",
  "top hero paintings10.jpg",
  "top hero paintings11.jpg",
  "top hero paintings12.jpg",
  "top hero paintings13.jpg",
  "top hero paintings14.jpg",
].map((filename, index) => ({
  id: `top-hero-painting-${index + 1}`,
  alt: `Featured hero painting ${index + 1}`,
  src: `${topHeroAssetBaseUrl}/${encodeURIComponent(filename)}`,
  title: `Featured hero painting ${index + 1}`,
}));

export const catalogSpreads: CatalogSpread[] = [
  {
    slug: "spring-collection",
    title: "Spring Collection",
    pageImages: [],
  },
];
