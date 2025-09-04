import Hero from "@/component/ui/landing/Hero";
import MainAbout from "@/component/ui/landing/about/MainAbout";
import PageSeparatedSection from "@/component/util/PageSeparatedSection";
import MainProducts from "@/component/ui/landing/products/MainProducts";
import ProductAdvantages from "@/component/ui/landing/products/ProductAdvantages";
import {useTranslations} from "next-intl";
import MainBusinessScheme from "@/component/ui/landing/BScheme/MainBusinessScheme";
import MainContact from "@/component/ui/landing/contact/MainContact";

export default function HomePage() {
    const tTagline = useTranslations('Tagline')
    return(
        <>
            {/*hero*/}
            <Hero/>

            {/*about*/}
            <MainAbout/>

            {/*separator*/}
            <PageSeparatedSection text={tTagline('text')} img={"/img/separator/separator-1.jpg"}/>

            {/*products*/}
            <MainProducts/>

            {/*separator*/}
            <PageSeparatedSection text={"our services"} img={"/img/separator/separator-2.jpg"}>
                <ProductAdvantages/>
            </PageSeparatedSection>

            {/*Business Scheme*/}
            <MainBusinessScheme/>

            {/*separator*/}
            <PageSeparatedSection text={tTagline('text')} img={"/img/separator/separator-3.jpg"}/>

            <MainContact/>
        </>
    )
}