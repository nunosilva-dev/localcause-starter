import {PageBlocksTimeline} from "../../tina/__generated__/types";

export const TimelineBlock = ({data}: { data: PageBlocksTimeline }) => {
    return (
        <section className="py-20 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{data.label || "Timeline"}</h2>
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"/>

                {data.items?.map((item, i) => (
                    <div key={i}
                         className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                         }`}>
                        {/* Dot */}
                        <div
                            className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow -translate-x-1/2 mt-1 z-10"/>

                        {/* Content card */}
                        <div
                            className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                            }`}>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                {item?.date && (
                                    <div className="text-sm font-bold text-primary mb-1">{item.date}</div>
                                )}
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item?.title}</h3>
                                {item?.description && (
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
