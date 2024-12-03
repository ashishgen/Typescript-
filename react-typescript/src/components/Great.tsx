type GreatProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}
export const Great = (props: GreatProps) => {
    const { messageCount = 0 } = props
    return (
        <div>
            <h2>
                {
                props.isLoggedIn ? 'Welcome {props.name}! You have {props.messageCount} unreaded message' : 'Welcome guest'
                }
                </h2>
        </div>
    )
}