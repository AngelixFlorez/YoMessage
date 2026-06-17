export const WALLPAPER_SECTIONS = [
  { id: "temas", title: "Temas" },
  { id: "heroes", title: "Héroes" },
  { id: "abstract", title: "Abstract" },
];

export const WALLPAPERS = [
  {
    id: "rusia-theme",
    category: "temas",
    label: "Rusia",
    url: "/wallpapers/Rusia-Theme.jpg",
  },
  {
    id: "bangkok-theme",
    category: "temas",
    label: "Bangkok",
    url: "/wallpapers/Bangkok-Theme.jpg",
  },
  {
    id: "new-york-theme",
    category: "temas",
    label: "New York",
    url: "/wallpapers/NewYork-Theme.jpg",
  },
  {
    id: "paris-theme",
    category: "temas",
    label: "París",
    url: "/wallpapers/Paris-Theme.jpg",
  },
  {
    id: "korea-theme",
    category: "temas",
    label: "Korea",
    url: "/wallpapers/Korea-Theme.jpg",
  },
  {
    id: "japan-theme",
    category: "temas",
    label: "Japón",
    url: "/wallpapers/Japan-Theme.webp",
  },
  {
    id: "marvel-theme",
    category: "heroes",
    label: "Marvel",
    url: "/wallpapers/Marvel-Theme.webp",
  },
  {
    id: "red-superman",
    category: "heroes",
    label: "Red Superman",
    url: "/wallpapers/Red-Superman.webp",
  },
  {
    id: "batman-theme",
    category: "heroes",
    label: "Batman",
    url: "/wallpapers/Batman-Theme.webp",
  },
  {
    id: "chaos-batman",
    category: "heroes",
    label: "Chaos Batman",
    url: "/wallpapers/Chaos-Batman.webp",
  },
  {
    id: "comic-spiderman",
    category: "heroes",
    label: "Comic Spiderman",
    url: "/wallpapers/Comic-Spiderman.webp",
  },
  {
    id: "macos-graphic",
    category: "abstract",
    label: "macOS Graphic",
    url: "/wallpapers/macos-graphic.jpg",
  },
  {
    id: "radial-yellow",
    category: "abstract",
    label: "Radial Yellow",
    url: "/wallpapers/radial-yellow.jpg",
  },
  {
    id: "radial-purple",
    category: "abstract",
    label: "Radial Purple",
    url: "/wallpapers/radial-purple.jpg",
  },
  {
    id: "radial-green",
    category: "abstract",
    label: "Radial Green",
    url: "/wallpapers/radial-green.jpg",
  },
  {
    id: "radial-blue",
    category: "abstract",
    label: "Radial Blue",
    url: "/wallpapers/radial-blue.jpg",
  },
];

export function frameStyleFromUrl(url) {
  return {
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

export function getWallpaperById(id) {
  return WALLPAPERS.find((w) => w.id === id) ?? WALLPAPERS[0];
}