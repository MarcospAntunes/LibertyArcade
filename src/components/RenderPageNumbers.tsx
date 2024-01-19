/* eslint-disable @typescript-eslint/no-explicit-any */

import usePagination from "../hooks/usePagination";
import calculateVisiblePages from "../utils/calculateVisiblePages";

type RenderPageNumbersProps = {
    totalPages: number;
};

function RenderPageNumbers({ totalPages }: RenderPageNumbersProps): any {
    const {currentPage, maxPagesToShow, onPageChange } = usePagination();
    const currentPageNumber = Number(currentPage);

    if (totalPages <= 0) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
        const visiblePages = calculateVisiblePages({ totalPages, currentPageNumber, maxPagesToShow });

        return visiblePages.map((pageNumber: string | number) => (
            pageNumber === '...' ? 
                <button style={{backgroundColor: '#e58e27'}}>...</button>
            :
                <button
                    key={pageNumber}
                    onClick={() => {
                        onPageChange(Number(pageNumber));
                        document.documentElement.scrollTop = -document.documentElement.scrollHeight;
                    }}
                    style={{backgroundColor: currentPageNumber === pageNumber ? 'white' : '#e58e27', color: currentPageNumber === pageNumber ? 'black' : '#fbfbfb'}}
                >
                    {pageNumber}
                </button>
        ));
    }
}

export default RenderPageNumbers;