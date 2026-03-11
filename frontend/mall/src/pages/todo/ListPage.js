import { useSearchParams } from "react-router-dom";

const ListPage = () => {
    const [queryParam] = useSearchParams();

    const page = queryParam.get("page") ? parseInt(queryParam.get("page")) : 1
    const size = queryParam.get("size") ? parseInt(queryParam.get("size")) : 10

    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Todo List Page Componenet {page} --- {size}
            </div>
        </div>
    );
}

export default ListPage;    