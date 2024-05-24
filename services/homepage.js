import { notFound } from "next/navigation";
import { Api } from "@/utils/axios";

const getBanner = async () => {
  try {
    const res = await Api.get("/banner/available");
    return res.data;
  } catch (error) {
    notFound();
  }
};

export { getBanner };
