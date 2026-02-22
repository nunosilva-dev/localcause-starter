import {PageBlocksImpactGrid} from "../../tina/__generated__/types";

export const ImpactGridBlock = ({data}: { data: PageBlocksImpactGrid }) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-8">
                    {data.stats?.map((stat, i) => (
                        <div key={i}
                             className="bg-white p-8 rounded-xl shadow-sm text-center border-t-4 border-primary w-full md:w-[calc(33.333%-1.34rem)]">
                            <div className="text-4xl font-bold text-primary mb-2">{stat?.value}</div>
                            <div className="text-gray-600 font-medium">{stat?.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
