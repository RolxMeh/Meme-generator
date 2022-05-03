import React from "react";

export default function Meme(props) {
  // // const [memeImage, setMemeImage] = React.useState(
  //   "https://i.imgflip.com/1h7in3.jpg"
  // );

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1h7in3.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function memeImageChanger() {
    const randomNum = Math.floor(Math.random() * allMemes.length);

    const url = allMemes[randomNum].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  return (
    <main className="p-9 w-full font-karl">
      <div action="">
        <div className="w-[500px] mx-auto flex gap-4">
          <input
            type="text"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            className="w-60 h-9 p-4 border rounded outline-none text-xs"
          />
          <input
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            className="w-60 h-9 p-4 border rounded outline-none text-xs"
          />
        </div>
        <button
          onClick={memeImageChanger}
          className="bg-gradient-to-r from-[#672280] to-[#A626D3] w-[477px] h-10 mt-4 mx-auto text-base text-white font-bold rounded block cursor-pointer"
        >
          Get a new meme image 🖼
        </button>
      </div>

      <div className="relative">
        <h2 className="w-2/5 m-2 font-bold text-center  text-4xl uppercase text-white font-imprimo absolute top-0  left-2/4 shadow-orange-500 meme-text">
          {meme.topText}
        </h2>
        <h2 className="w-2/5 m-2 font-bold text-center text-4xl uppercase text-white font-imprimo absolute bottom-0 left-2/4 meme-text">
          {meme.bottomText}
        </h2>
        <img
          src={meme.randomImage}
          className="w-[600px] h-96 my-12 mx-auto rounded-sm"
        />
      </div>
    </main>
  );
}
