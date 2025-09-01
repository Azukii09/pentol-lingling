import {useTranslations} from 'next-intl';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return(
        <div className={"w-full h-screen flex justify-center global-padding"}>
            <h1>{t('title')}</h1>
        </div>
    )
}