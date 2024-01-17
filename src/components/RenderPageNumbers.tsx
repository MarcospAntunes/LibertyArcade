/* eslint-disable @typescript-eslint/no-explicit-any */

import calculateVisiblePages from "../utils/calculateVisiblePages";

type RenderPageNumbersProps = {
    totalPages: number;
    maxPagesToShow: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
};

function RenderPageNumbers({ totalPages, maxPagesToShow, currentPage, onPageChange }: RenderPageNumbersProps): any {
    if (totalPages <= 0) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
        const visiblePages = calculateVisiblePages({ totalPages, currentPage, maxPagesToShow });

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
                    style={{backgroundColor: currentPage === pageNumber ? 'white' : '#e58e27', color: currentPage === pageNumber ? 'black' : '#fbfbfb'}}
                >
                    {pageNumber}
                </button>
        ));
    }
}

export default RenderPageNumbers;