import Container from "@/components/container";
import Image from "next/image";
import BannerImage from "@/public/images/home/explore.png";
import { HeadingTwo } from "@/components/typing/heading";
import Paragraph from "@/components/typing/paragprah";
import { ButtonPrimary } from "@/components/box/button";

export default function ExploreTumurun() {
  return (
    <div className="w-full h-72 flex items-center justify-center relative">
      <Image
        src={BannerImage}
        alt="banner"
        fill
        className="object-cover"
        quality={100}
        fetchPriority="low"
      />
      <Container className="flex items-center">
        <div className="flex flex-col lg:flex-row justify-between w-full p-4 lg:p-8 h-max items-start bg-white relative z-10">
          <HeadingTwo className="font-semibold">
            Jelajahi Museum Tumurun
          </HeadingTwo>
          <div className="max-w-2xl space-y-3.5">
            <Paragraph>
              Jelajahi koleksi luar biasa karya seni yang menakjubkan di Museum
              Tumurun, yang diciptakan oleh tangan-tangan seniman yang
              mengagumkan.
            </Paragraph>
            <ButtonPrimary className="text-white">
              Lihat Kunjungan
            </ButtonPrimary>
          </div>
        </div>
      </Container>
    </div>
  );
}
