export type SongProps = {
  id: number;
  title: string;
  artist: string;
  image: string;
  link: string;
};

export const songs = [
  {
    id: 1,
    title: "Lie Again",
    artist: "Giveon",
    image: require(".//../../public/songs/lie-again.jpeg"),
    link: "https://open.spotify.com/album/11q4Tt1RzwrFzF2Vddc2yO",
  },
  {
    id: 9,
    title: "Martin's Sofa",
    artist: "Headie One",
    image: require(".//../../public/songs/martins-sofa.jpg"),
    link: "https://open.spotify.com/album/5ywIBJnydB9IMqgg0XDU6O",
  },
  {
    id: 2,
    title: "Let Me Go",
    artist: "Daniel Ceasar",
    image: require(".//../../public/songs/let-me-go.jpg"),
    link: "https://open.spotify.com/track/4AwJSk491AvHk2AAJReGzZ",
  },
  {
    id: 8,
    title: "One Up",
    artist: "Central Cee",
    image: require(".//../../public/songs/one-up.png"),
    link: "https://open.spotify.com/album/51A9bnCs9oq6vjFZIDza97",
  },
  {
    id: 3,
    title: "Glitter",
    artist: "BENEE",
    image: require(".//../../public/songs/glitter.jpg"),
    link: "https://open.spotify.com/track/23TPP1eeElFfvYVznskwCY",
  },
  {
    id: 7,
    title: "Lemme Land?",
    artist: "Canking, Ess2Mad",
    image: require(".//../../public/songs/lemme-land.jpg"),
    link: "https://open.spotify.com/track/4Fmr4dbY1sZiX77ZbljNFC",
  },
  {
    id: 4,
    title: "Floods",
    artist: "Lucky Daye",
    image: require(".//../../public/songs/floods.jpg"),
    link: "https://open.spotify.com/track/4GBjdj1z74h8RVr1Us6YFc",
  },
  {
    id: 6,
    title: "Nice & Good",
    artist: "SL, Knucks",
    image: require(".//../../public/songs/nice-and-good.jpg"),
    link: "https://open.spotify.com/album/2nZHGm0LbyWb9SQ48RWFdO",
  },
  {
    id: 5,
    title: "Care",
    artist: "Sonder",
    image: require(".//../../public/songs/care.jpg"),
    link: "https://open.spotify.com/track/3tkxfORwPo2zydAf25YFOc",
  },
  {
    id: 10,
    title: "22 Double 0",
    artist: "Unknown T",
    image: require(".//../../public/songs/22-double-0.jpg"),
    link: "https://open.spotify.com/track/0L0sXaqVYGpvXWcikG6zlk",
  },
];
