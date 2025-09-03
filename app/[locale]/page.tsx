import Hero from "@/component/ui/landing/Hero";
import MainAbout from "@/component/ui/landing/about/MainAbout";
import PageSeparatedSection from "@/component/util/PageSeparatedSection";
import MainProducts from "@/component/ui/landing/products/MainProducts";

export default function HomePage() {
    return(
        <>
            <Hero/>
            <MainAbout/>
            <PageSeparatedSection text={"our services"} img={"/img/separator/separator-1.jpg"}/>
            <MainProducts/>
        </>
    )
}