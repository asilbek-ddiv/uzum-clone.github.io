import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n';

export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dict = await getDictionary(lang);
    return (
        <div>
            <h1>{dict.general.hello}</h1>
            <p>{dict.general.welcome}</p>
        </div>
    );
}