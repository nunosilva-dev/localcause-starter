import {client} from "../../tina/__generated__/client";
import {ClientPage} from "./client-page";

export default async function Page(props: {
    params: Promise<{ filename: string[] }>;
}) {
    let data = null;
    let query = null;
    let variables = null;

    try {
        const params = await props.params;
        const filename = params.filename ? params.filename.join("/") : "home";
        const res = await client.queries.page({
            relativePath: `${filename}.md`,
        });
        data = res.data;
        query = res.query;
        variables = res.variables;
    } catch (e) {
        console.error(e);
        return <div className="p-20 text-center">Page not found or Tina not initialized.</div>
    }

    return <ClientPage data={data} query={query} variables={variables}/>;
}

// Ensure static generation for known pages
export async function generateStaticParams() {
    try {
        const pages = await client.queries.pageConnection();
        const paths = pages.data.pageConnection.edges?.map((edge) => {
            const filename = edge?.node?._sys.filename;
            return {
                filename: filename === "home" ? [] : [filename],
            };
        });
        return paths || [];
    } catch (e) {
        return [];
    }
}
