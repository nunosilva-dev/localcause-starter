import {PageBlocksDonation} from "../../tina/__generated__/types";
import {Heart} from "lucide-react";
import {TinaMarkdown} from "tinacms/dist/rich-text";

export const DonationBlock = ({data}: { data: PageBlocksDonation }) => {
    if (data.visible === false) return null;
    return (
        <section className="py-20 bg-primary/5 text-center">
            <div className="max-w-3xl mx-auto px-4">
                <div className="inline-block p-4 bg-primary rounded-full mb-6">
                    <Heart className="w-10 h-10 text-white fill-current"/>
                </div>
                <h2 className="text-4xl font-bold mb-8 text-gray-900">{data.headline || "Support Our Cause"}</h2>

                {data.methods && data.methods.length > 0 && (
                    <div
                        className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary/20 grid gap-6 md:grid-cols-1">
                        {data.methods.map((method, i) => (
                            <div key={i}
                                 className="bg-gray-50 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                                <div>
                                    <div
                                        className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">{method?.label}</div>
                                    {method?.helperText &&
                                        <div className="text-xs text-gray-400 mb-1">{method.helperText}</div>}
                                </div>
                                <div className="text-xl font-bold text-gray-800 break-all">{method?.value}</div>
                            </div>
                        ))}
                    </div>
                )}

                {data.description && (
                    <div className="mt-8 text-gray-600 italic prose max-w-none">
                        <TinaMarkdown content={data.description}/>
                    </div>
                )}
            </div>
        </section>
    );
};
