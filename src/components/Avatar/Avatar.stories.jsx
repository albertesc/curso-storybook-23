import { Avatar } from './Avatar'
import withColorScheme from '../../utils/decorator'

export default {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'fullscreen'
    },
    decorators: [withColorScheme]
}

export const Default = {
    render: () => <Avatar src="https://i.pravatar.cc/300" alt="avatar" />
}


/*
function withColorScheme(Story, context) {
    const { scheme } = context.globals
    
    if (scheme === 'light') {
        return (
            <div className="color-scheme--light">
                <Story />
            </div>
        )
    }

    if (scheme === 'dark') {
        return (
            <div className="color-scheme--dark">
                <Story />
            </div>
        )
    }
}*/