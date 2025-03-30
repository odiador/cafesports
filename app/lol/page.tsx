import Image from 'next/image';

export default function LolPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex-1 flex flex-col items-center">
        <Image
          className="w-80 h-fit"
          src={"/lol.webp"}
          alt={"Poster de League of Legends"}
          width={400}
          height={100}
        />
      </div>

    </div>
  );
}