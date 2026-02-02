import axios from "axios";
import { CitiesProps } from "@/types/cities.type";

export const getCities = async () => {
  try {
    const response = await axios.get<CitiesProps[]>("/api/v1/cities");
    return response.data.data;
  } catch (error) {
    console.error("Cities API chaqirishda xato:", error);

    return [];
  }
};
