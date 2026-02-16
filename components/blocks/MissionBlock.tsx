import {PageBlocksMission} from "../../tina/__generated__/types";
import {cn} from "../../lib/utils";
import {tinaField} from "tinacms/dist/react";
import {TinaMarkdown} from "tinacms/dist/rich-text";

export const MissionBlock = ({data}: { data: PageBlocksMission }) => {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div
                className={cn("flex flex-col gap-12 items-center", data.imageSide === "left" ? "lg:flex-row" : "lg:flex-row-reverse")}>
                <div className="flex-1">
                    <img src={data.image} alt="Mission" className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
                         data-tina-field={tinaField(data, "image")}/>
                </div>
                <div className="flex-1 prose prose-lg prose-headings:text-primary"
                     data-tina-field={tinaField(data, "content")}>
                    <TinaMarkdown content={data.content}/>
                </div>
            </div>
        </section>
    );
};
