function switchActionsUser() {
    const loginRegister: HTMLDivElement | null = document.querySelector(".loginRegister");

    if(loginRegister !== null) {
        loginRegister.style.display = "none";
    }
}

export default switchActionsUser;  