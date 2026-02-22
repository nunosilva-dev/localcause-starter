import {PageBlocksEvents} from "../../tina/__generated__/types";
import {Calendar, MapPin} from "lucide-react";

export const EventsListBlock = ({data}: { data: PageBlocksEvents }) => {
    return (
        <section className="py-20 max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{data.label || "Events"}</h2>
            <div className="space-y-6">
                {data.items?.map((event, i) => (
                    <div key={i}
                         className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow">
                        <div
                            className="bg-primary/10 text-primary p-4 rounded-lg flex flex-col items-center justify-center min-w-[100px]">
                            <Calendar className="w-6 h-6 mb-1"/>
                            <span
                                className="font-bold">{event?.date ? new Date(event.date).toLocaleDateString() : "Date TBA"}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">{event?.title}</h3>
                            <div className="flex items-center text-gray-500 gap-2">
                                <MapPin className="w-4 h-4"/>
                                <span>{event?.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
