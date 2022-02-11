"use strict";
let dialog = undefined;
if (window.fvttYtHookId) {
    Hooks.off('createChatMessage', window.fvttYtHookId);
}
window.fvttYtHookId = Hooks.on("createChatMessage", (msg) => {
    let split = msg.data.content.split(':');
    if (split[0] !== 'YTVID') {
        return;
    }
    dialog = dialog !== null && dialog !== void 0 ? dialog : new Dialog({
        title: 'Embed Youtube',
        content: '',
        default: '',
        buttons: {},
        close: () => window.fvttYtDialog = undefined
    }, {
        width: 470,
        height: 300,
        resizable: true,
        minimizable: true
    });
    const ytVidId = split[1];
    const content = '<iframe \
        width="450" \
        height="250" \
        allow="autoplay" \
        src="https://www.youtube.com/embed/' + ytVidId + '?&autoplay=1&loop=1&playlist=' + ytVidId + '" \
        frameborder="0" \
    ';
    window.fvttYtDialog.data.content = content;
    window.fvttYtDialog.render(true);
});
