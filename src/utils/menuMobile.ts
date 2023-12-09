type openMenuProps = {
    menuVisibility: boolean
    setMenuVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

function openMenu({ menuVisibility, setMenuVisibility }: openMenuProps) {
    const menu: HTMLElement = document.querySelector('nav')!
    const line1: HTMLElement = document.querySelector('.line1')!
    const line2: HTMLElement = document.querySelector('.line2')!
    const line3: HTMLElement = document.querySelector('.line3')!

    if (menuVisibility) {
        setTimeout(() => { setMenuVisibility(false) }, 150)  
        menu.style.animation = 'vanish 0.2s linear';
        line2.style.display = 'block'
        line1.style.transform = 'rotate(0)'
        line3.style.transform = 'rotate(0)' 
    } else {
        setMenuVisibility(true);
        menu.style.animation = 'appear 0.2s linear';
        line2.style.display = 'none'
        line3.style.transform = 'rotate(-45deg) translateY(-5px)'
        line1.style.transform = 'rotate(45deg) translateY(5px)'
    }
}

export { openMenu }