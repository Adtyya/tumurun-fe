import Banner from "@/components/view/homepage/banner";
import Discover from "@/components/view/homepage/discover";
import ExploreTumurun from "@/components/view/homepage/explore";
import { getBanner } from "@/services/homepage";

export const revalidate = 360000;

export default async function Home() {
  const getListBanner = await getBanner();
  return (
    <>
      <Banner list={getListBanner} />
      <Discover />
      <ExploreTumurun />
    </>
  );
}
