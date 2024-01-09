import userProps from "./user"

type authProps = {
    login?: () => string
    register?: () => string
    logOut?: () => void
    user?: userProps
    signed?: number
}

export default authProps;