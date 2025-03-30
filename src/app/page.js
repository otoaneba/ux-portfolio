import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl font-bold">Naoto Abe</h1>
          <p>Digital craftsman (Developer / UX Researcher)</p>
        </div>
        <div>
          <Image src="/images/profile.jpg" alt="Naoto Abe" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
