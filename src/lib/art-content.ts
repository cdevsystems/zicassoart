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
        src: "https://assets.zicassoart.com/paintings/Prayers%20At%20The%20koisel.webp",
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
        src: "https://assets.zicassoart.com/paintings/A%20Lovely%20Morning.webp",
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
        src: "https://assets.zicassoart.com/paintings/Blowing%20Of%20The%20Shofor.webp",
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
        src: "https://assets.zicassoart.com/paintings/The%20Fruits%20Of%20Bikurim.webp",
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
        src: "https://assets.zicassoart.com/paintings/The%20Smell%20Of%20Sunflowers.webp",
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
        src: "https://assets.zicassoart.com/paintings/The%20yerusalem%20we%20are%20waiting%20for%20.webp",
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
        src: "https://assets.zicassoart.com/paintings/Torah%20Hu%20Chayeinu.webp",
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
        src: "https://assets.zicassoart.com/paintings/Vintage%20Airballoon.webp",
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
        src: "https://assets.zicassoart.com/paintings/mount%20sinai%20good%20.webp",
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
        src: "https://assets.zicassoart.com/paintings/portrait.webp",
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
        src: "https://assets.zicassoart.com/paintings/the%20light%20of%20our%20life.webp",
      },
    ],
  },
];

export const heroPaintingSlides = paintings.flatMap((painting) =>
  painting.images.map((image) => ({
    ...image,
    title: painting.title,
  })),
);

export const catalogSpreads: CatalogSpread[] = [
  {
    slug: "spring-collection",
    title: "Spring Collection",
    pageImages: [],
  },
];
