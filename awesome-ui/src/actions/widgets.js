export const UPDATE_WIDGET_EDITOR = 'UPDATE_WIDGET_EDITOR';

export const updateWidgetEditor = (key, value) => {
    return {
        type: UPDATE_WIDGET_EDITOR,
        payload: { [key]: value },
    };
};
