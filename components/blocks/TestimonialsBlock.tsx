import {PageBlocksTestimonials} from "../../tina/__generated__/types";
import {Quote} from "lucide-react";

export const TestimonialsBlock = ({data}: { data: PageBlocksTestimonials }) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">{data.label || "Testimonials"}</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {data.items?.map((item, i) => (
                        <div key={i}
                             className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full md:w-[calc(50%-1rem)] flex flex-col">
                            <Quote className="w-8 h-8 text-primary/30 mb-4"/>
                            <p className="text-gray-700 italic leading-relaxed flex-1">
                                &ldquo;{item?.quote}&rdquo;
                            </p>
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <div className="font-semibold text-gray-900">{item?.author}</div>
                                {item?.role && (
                                    <div className="text-sm text-gray-500">{item.role}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
