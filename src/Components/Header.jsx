export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#672280] to-[#A626D3] w-full h-16 pl-5 pr-9 text-white font-karla flex flex-row items-center">
      <img src="./trollface.png" className="w-8 h-7 mr-2" />
      <h1 className="mr-auto text-xl font-bold">Meme Generator</h1>
      <h3 className="text-xs">React Course - Project 3 </h3>
    </header>
  );
}
