import '../styles/components/Pagination.sass'
import RenderPageNumbers from './RenderPageNumbers'

type PaginationProps = {
    currentPage: number 
    totalPages: number 
    onPageChange: (pageNumber: string | number) => void
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const maxPagesToShow = 9;

    return (
        <nav id='paginationNav'>
            <ul>
                {RenderPageNumbers({totalPages, maxPagesToShow, currentPage, onPageChange}).map((pageElement: string | number, index: number) => (
                    <li key={index}>{pageElement}</li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;