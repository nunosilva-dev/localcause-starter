import {PageBlocks} from "../../tina/__generated__/types";
import {HeroBlock} from "./HeroBlock";
import {MissionBlock} from "./MissionBlock";
import {ImpactGridBlock} from "./ImpactGridBlock";
import {EventsListBlock} from "./EventsListBlock";
import {ContactBlock} from "./ContactBlock";
import {DonationBlock} from "./DonationBlock";
import {ImageBlock} from "./ImageBlock";
import {FaqBlock} from "./FaqBlock";
import {TestimonialsBlock} from "./TestimonialsBlock";
import {TimelineBlock} from "./TimelineBlock";

export const Blocks = ({blocks}: { blocks: PageBlocks[] }) => {
    if (!blocks) return null;

    return (
        <>
            {blocks.map((block, i) => {
                switch (block.__typename) {
                    case "PageBlocksHero":
                        return <HeroBlock key={i} data={block}/>;
                    case "PageBlocksMission":
                        return <MissionBlock key={i} data={block}/>;
                    case "PageBlocksImpactGrid":
                        return <ImpactGridBlock key={i} data={block}/>;
                    case "PageBlocksEvents":
                        return <EventsListBlock key={i} data={block}/>;
                    case "PageBlocksContact":
                        return <ContactBlock key={i} data={block}/>;
                    case "PageBlocksDonation":
                        return <DonationBlock key={i} data={block}/>;
                    case "PageBlocksImage":
                        return <ImageBlock key={i} data={block}/>;
                    case "PageBlocksFaq":
                        return <FaqBlock key={i} data={block}/>;
                    case "PageBlocksTestimonials":
                        return <TestimonialsBlock key={i} data={block}/>;
                    case "PageBlocksTimeline":
                        return <TimelineBlock key={i} data={block}/>;
                    default:
                        return null;
                }
            })}
        </>
    );
};
