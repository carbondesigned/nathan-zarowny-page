import PreSaveCover from "./img/pre-order-cover.png"

export const PostState = () => {
  const Genres = ["Pre Save", "Release", "Album"]
  return [
    {
      genre: Genres[0],
      title: "What We Got (is over)",
      cta: "Pre Save Now",
      cover: PreSaveCover,
      url: "/recent/pre-save-what-we-got",
    },
  ]
}
