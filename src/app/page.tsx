import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden m-0 p-0">
      {/* Fullscreen Background Image */}
      <Image
        src="https://i.pinimg.com/1200x/09/ec/32/09ec3250f9c401d035f27dd856434fa3.jpg" // replace with your real image URL
        alt="Background"
        fill
        className="object-cover object-center "
        priority
      />
    </main>
  );
}
