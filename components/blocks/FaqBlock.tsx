"use client";

import {PageBlocksFaq} from "../../tina/__generated__/types";
import {ChevronDown} from "lucide-react";
import {useState} from "react";

export const FaqBlock = ({data}: { data: PageBlocksFaq }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="py-20 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{data.label || "FAQ"}</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
                {data.items?.map((item, i) => (
                    <div key={i}>
                        <button
                            onClick={() => toggle(i)}
                            className="w-full flex justify-between items-center py-5 text-left gap-4 cursor-pointer"
                        >
                            <span className="text-lg font-semibold text-gray-900">
                                {item?.question}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-200 ${openIndex === i ? "max-h-96 pb-5" : "max-h-0"
                            }`}
                        >
                            <p className="text-gray-600 leading-relaxed">
                                {item?.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
