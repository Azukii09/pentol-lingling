import Hero from "@/component/ui/landing/Hero";
import MainAbout from "@/component/ui/landing/about/MainAbout";
import PageSeparatedSection from "@/component/util/PageSeparatedSection";
import MainProducts from "@/component/ui/landing/products/MainProducts";
import ProductAdvantages from "@/component/ui/landing/products/ProductAdvantages";
import {useTranslations} from "next-intl";

export default function HomePage() {
    const tTagline = useTranslations('Tagline')
    return(
        <>
            <Hero/>
            <MainAbout/>
            <PageSeparatedSection text={tTagline('text')} img={"/img/separator/separator-1.jpg"}/>
            <MainProducts/>
            <PageSeparatedSection text={"our services"} img={"/img/separator/separator-2.jpg"}>
                <ProductAdvantages/>
            </PageSeparatedSection>
        </>
    )
}