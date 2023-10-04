export default function withColorScheme(Story, context) {
    const { scheme } = context.globals

    return (
        <div className={`color-scheme--${scheme}`}>
            <Story />
        </div>
    )
}