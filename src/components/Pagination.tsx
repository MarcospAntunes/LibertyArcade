import '../styles/components/Pagination.sass'
import RenderPageNumbers from './RenderPageNumbers'

type PaginationProps = {
    totalPages: number
}

function Pagination({ totalPages }: PaginationProps ) {

    return (
        <nav id='paginationNav'>
            <ul>
                {RenderPageNumbers({ totalPages }).map((pageElement: string | number, index: number) => (
                    <li key={index}>{pageElement}</li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;