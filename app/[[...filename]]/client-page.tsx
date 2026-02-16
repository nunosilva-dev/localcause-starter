"use client";

import {useTina} from "tinacms/dist/react";
import {PageBlocks, PageQuery} from "../../tina/__generated__/types";
import {Blocks} from "../../components/blocks";

interface ClientPageProps {
    data: PageQuery;
    variables: object;
    query: string;
}

export const ClientPage = (props: ClientPageProps) => {
    const {data} = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    return (
        <div className="min-h-screen">
            <Blocks blocks={(data.page.blocks || []) as PageBlocks[]}/>
        </div>
    );
};
