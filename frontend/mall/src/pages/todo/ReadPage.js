import { useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

const ReadPage = () => {
    const { tno } = useParams()
    const navigate = useNavigate()
    const [queryParam] = useSearchParams()

    const page = queryParam.get("page") ? parseInt(queryParam.get("page")) : 1
    const size = queryParam.get("size") ? parseInt(queryParam.get("size")) : 10

    const queryStr = createSearchParams({page, size}).toString()

    const moveToModify = useCallback((tno) => {
        navigate({
            pathname: '/todo/modify/${tno}',
            search: queryStr,
        })
    }, [tno, page, size])

    const moveToList = useCallback(() => {
        navigate({
            pathname: '/todo/list',
            search: queryStr,
        })
    }, [page, size])

    return (
        <div>
            <div className="text-3xl font-extrabold">
                Todo Read Page Component {tno}
            </div>
            <div>
                <button onClick={() => moveToModify(tno)}>Test Modify</button>
                <button onClick={() => moveToList()}>Test List</button>
            </div>
        </div>
        
    );
}

export default ReadPage;