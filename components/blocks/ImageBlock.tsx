import {PageBlocksImage} from "../../tina/__generated__/types";

export const ImageBlock = ({data}: { data: PageBlocksImage }) => {
    return (
        <section className="w-full">
            {data.src && (
                <img
                    src={data.src}
                    alt={data.alt || ""}
                    className="w-full"
                    style={{
                        maxHeight: data.maxHeight ? `${data.maxHeight}px` : undefined,
                        objectFit: (data.fit as React.CSSProperties["objectFit"]) || "cover",
                        objectPosition: data.position || "center",
                    }}
                />
            )}
        </section>
    );
};
