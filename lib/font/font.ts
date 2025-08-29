import {Amatic_SC, Poppins, Roboto} from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    weight:["100","200","300","400","500","600","700","800","900"],
});

export const roboto = Roboto({
    subsets:["latin"],
    weight:["100","200","300","400","500","600","700","800","900"],
})

export const amatic_sc = Amatic_SC({
    subsets:["latin"],
    weight:["400","700"],
})