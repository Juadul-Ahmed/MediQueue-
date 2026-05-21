import Banner from "@/components/Banner";
import { TopCoursesSection } from "@/components/TopCoursesSection";
import { ReviewSection } from "@/components/ReviewSection";
import { LocationSection } from "@/components/LocationSection";
import { Suspense } from "react";
import Spinner from "@/components/Spinner";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/all`, {
    cache: "no-store",
  });
  const tutors = await res.json();

  return (
    <div className="bg-slate-50 min-h-screen">
      <Banner />

      <Suspense fallback={<Spinner message="Loading our top premium courses..."/>} >
        <TopCoursesSection tutors={tutors} />
      </Suspense>

      <ReviewSection />

      <LocationSection />
    </div>
  );
}
