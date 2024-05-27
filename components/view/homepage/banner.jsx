"use client";

import Container from "@/components/container";
import Image from "next/image";
import { ButtonPrimary } from "@/components/box/button";
import Paragraph from "@/components/typing/paragprah";
import { FiChevronRight } from "react-icons/fi";
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdInfoOutline,
} from "react-icons/md";
import { useState } from "react";

export default function Banner({ list }) {
  const [isPlay, setPlay] = useState(false);
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
      <div className="absolute top-1/2 lg:top-[60%] left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 lg:-translate-y-0 w-full">
        <Container>
          <div className="flex w-full flex-wrap space-y-3.5 h-full justify-between">
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
            <div className="flex h-60 w-full lg:w-max items-end justify-end space-x-5">
              <div className="py-2.5">
                <button
                  className="bg-cGray p-2 text-white text-2xl"
                  onClick={() => setPlay(!isPlay)}
                >
                  {isPlay ? <MdPlayCircleOutline /> : <MdPauseCircleOutline />}
                </button>
              </div>
              <div className="group py-2.5">
                <div className="bg-cGray p-2 text-white text-2xl relative">
                  <MdInfoOutline />
                  <div className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 -top-36 right-0 bg-cGray duration-200">
                    <div className="w-64 text-start h-auto p-3 space-y-1.5">
                      <h3 className="text-lg font-bold">{list?.title}</h3>
                      <p className="text-base">{list?.description}</p>
                      <p className="text-sm">Curated by {list?.curatedBy}</p>
                      <button className="text-base text-primary font-semibold">
                        Book Tiket Online
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
