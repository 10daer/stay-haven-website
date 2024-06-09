import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList";
import Loading from "./loading";
import Filter from "@/app/_components/Filter";

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams.capacity || "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-5">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <Filter />

      <Suspense fallback={<Loading />}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
