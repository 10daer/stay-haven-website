import Spinner from "@/app/_components/Spinner";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      <p className="text-xl text-yellow-100">Loading Cabins Data...</p>
    </div>
  );
}

export default Loading;
