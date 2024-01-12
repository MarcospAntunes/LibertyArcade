type CalculateVisiblePages = {
    totalPages: number
    currentPage: number 
    maxPagesToShow: number
}

function calculateVisiblePages({totalPages, currentPage, maxPagesToShow}: CalculateVisiblePages): (string | number)[] {
    const halfmaxPagesToShow = Math.floor(maxPagesToShow / 2);
    const lowerBound = Math.max(1, currentPage - halfmaxPagesToShow);
    const upperBound = Math.min(totalPages, lowerBound + maxPagesToShow - 1);

    const visiblePages = [];

    if(lowerBound > 1) {
        visiblePages.push(1);
        if(lowerBound > 2) {
            visiblePages.push('...');
        }
    }

    for(let i = lowerBound; i <= upperBound; i++) {
        visiblePages.push(i);
    }

    if(upperBound < totalPages) {
        if(upperBound < totalPages - 1) {
            visiblePages.push('...');
        }
        visiblePages.push(totalPages);
    }

    return visiblePages
}

export default calculateVisiblePages;