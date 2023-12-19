/* eslint-disable @typescript-eslint/no-explicit-any */

function switchActionsUser() {
    const loginRegister: HTMLDivElement | null = document.querySelector(".loginRegister");
    const logout: HTMLDivElement | null = document.querySelector(".logout")

    if(loginRegister !== null && logout !== null) {
        loginRegister.style.display = "none"
        logout.style.display = "flex"
    }
}

export default switchActionsUser;  