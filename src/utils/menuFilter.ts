type openFilterProps = {
    filterVisibility: boolean
    setFilterVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

function openFilter({ filterVisibility, setFilterVisibility }: openFilterProps): void {
    const menu: HTMLElement = document.querySelector('aside')!;

    if (filterVisibility) {
        setTimeout(() => { setFilterVisibility(false) }, 150);
        menu.style.animation = 'vanish 0.2s linear';
    } else {
        setFilterVisibility(true);
        menu.style.animation = 'appear 0.2s linear';
    }
}


export default openFilter;
