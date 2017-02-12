import { UPDATE_WIDGET_EDITOR } from '../actions/widgets';

const initialState = {
    widgetEditor: {
        name: '',
        description: '',
        type: 'blog_post',
        snippet: '',
        config: '{}',
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_WIDGET_EDITOR:
            return {
                ...state,
                widgetEditor: {
                    ...state.widgetEditor,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
};
