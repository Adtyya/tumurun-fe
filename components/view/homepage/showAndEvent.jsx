import { ButtonPrimary } from "@/components/box/button";
import Container from "@/components/container";
import { HeadingThree, HeadingTwo } from "@/components/typing/heading";
import Paragraph from "@/components/typing/paragprah";
import Link from "next/link";
import Image from "next/image";
import PosterSample from "@/public/images/home/poster.png";

export default function Event() {
  return (
    <Container>
      <div className="py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <HeadingTwo className="font-semibold">Pameran dan Event</HeadingTwo>
          <Link href="#">
            <Paragraph additional="!text-primary font-medium underline lg:no-underline">
              Lihat semua Pameran dan Event
            </Paragraph>
          </Link>
        </div>
        <div className="my-8">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-auto lg:col-span-3 bg-cGray p-5">
              <div className="space-y-1.5">
                <HeadingTwo className="text-cPink font-semibold">
                  KARTSBA
                </HeadingTwo>
                <HeadingThree className="text-white">
                  Pameran Karya Seni Modern
                </HeadingThree>
                <Paragraph additional="!text-white font-light">
                  Curated by Hendra Irawan
                </Paragraph>
              </div>
              <div className="mt-2.5 lg:mt-24">
                <small className="text-white">Exhibition</small>
                <Paragraph additional="!text-white">
                  2 Desember 2023 - 25 Mei 2024
                </Paragraph>
                <br />
                <ButtonPrimary className="text-white font-medium">
                  Book Tiket
                </ButtonPrimary>
              </div>
            </div>
            <div className="col-auto lg:col-span-9 order-first lg:order-last">
              <div className="h-full w-full min-h-64 relative">
                <Image
                  src={PosterSample}
                  alt="sample"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
