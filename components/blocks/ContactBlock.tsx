import {PageBlocksContact} from "../../tina/__generated__/types";
import {Mail, MapPin, Phone} from "lucide-react";

export const ContactBlock = ({data}: { data: PageBlocksContact }) => {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                    <div className="space-y-6 text-lg">
                        {data.address && (
                            <div className="flex items-center gap-4">
                                <MapPin className="text-primary w-6 h-6"/>
                                <span>{data.address}</span>
                            </div>
                        )}
                        {data.phone && (
                            <div className="flex items-center gap-4">
                                <Phone className="text-primary w-6 h-6"/>
                                <span>{data.phone}</span>
                            </div>
                        )}
                        {data.email && (
                            <div className="flex items-center gap-4">
                                <Mail className="text-primary w-6 h-6"/>
                                <span>{data.email}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex-1 h-[400px] rounded-xl overflow-hidden bg-gray-800">
                    {/* Use iframe with simplified attributes for safety/lint */}
                    <iframe
                        src={data.mapEmbed ?? ""}
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen={true}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};
