"use client";

import Container from "@/components/container";
import Image from "next/image";
import { ButtonPrimary } from "@/components/box/button";
import Paragraph from "@/components/typing/paragprah";
import { FiChevronRight } from "react-icons/fi";

export default function Banner({ list }) {
  console.log(list);
  return (
    <div className="w-full h-[41rem] relative">
      <div className="w-full h-full">
        <video
          className="w-full h-full object-cover brightness-75"
          controls={false}
          preload="meta"
          autoPlay
          muted
          poster={list?.image}
          loop
          controlsList="nofullscreen nodownload noremoteplayback"
        >
          <source src="/videos/banner/kartsba.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute top-1/2 lg:top-[60%] left-1/2 lg:left-0 transform -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 lg:-translate-y-0 w-full">
        <Container>
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-2/5 h-60">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
                <div className="w-full h-60 relative">
                  <Image
                    src={list?.image}
                    alt="hero-banner"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-2.5 flex flex-col justify-center space-y-3.5 items-start">
                  <h1 className="text-2xl font-bold">
                    Welcome to Tumurun Museum
                  </h1>
                  <div>
                    <p>Open today: 10.00-20.30</p>
                    <p>Last entry: 20.15</p>
                  </div>
                  <ButtonPrimary className="flex space-x-2.5 items-center">
                    <Paragraph additional="!text-white font-semibold">
                      Booking Ticket
                    </Paragraph>
                    <FiChevronRight className="text-lg text-white" />
                  </ButtonPrimary>
                </div>
              </div>
            </div>
            <div>right</div>
          </div>
        </Container>
      </div>
    </div>
  );
}
