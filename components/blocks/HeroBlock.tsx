import {PageBlocksHero} from "../../tina/__generated__/types";

export const HeroBlock = ({data}: { data: PageBlocksHero }) => {
    return (
        <section className="relative h-[600px] flex items-center justify-center text-white" style={{
            backgroundImage: `url('${data.backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="absolute inset-0 bg-black/50"/>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">{data.headline}</h1>
                <p className="text-xl mb-8 opacity-95 drop-shadow-md">{data.subtext}</p>
                {data.cta && (
                    <a href={data.cta.url}
                       className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                        {data.cta.label}
                    </a>
                )}
            </div>
        </section>
    );
};
