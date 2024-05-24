import axios from "axios";

export const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS || "https://tumurun-be.vercel.app/api",
  withCredentials: false,
});
