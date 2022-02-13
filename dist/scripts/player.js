"use strict";
let dialogHolder = {};
const loadVideo = (videoId) => {
    var _a;
    dialogHolder.dialog = (_a = dialogHolder.dialog) !== null && _a !== void 0 ? _a : new Dialog({
        title: 'Embed Youtube',
        content: '',
        default: '',
        buttons: {},
        close: () => dialogHolder.dialog = undefined
    }, {
        width: 470,
        height: 300,
        resizable: true,
        minimizable: true
    });
    const content = '<iframe \
        width="450" \
        height="250" \
        allow="autoplay" \
        src="https://www.youtube.com/embed/' + videoId + '?&autoplay=1&loop=1&playlist=' + videoId + '" \
        frameborder="0" \
        class="ytplayer" \
        id="iframe-id" \
    ';
    dialogHolder.dialog.data.content = content;
    dialogHolder.dialog.render(true);
};
const stopVideo = (id) => { var _a; (_a = dialogHolder.dialog) === null || _a === void 0 ? void 0 : _a.close(); };
Hooks.once("socketlib.ready", () => {
    const socket = socketlib.registerModule("embed-youtube");
    socket.register("load-video", id => loadVideo(id));
    socket.register("stop-video", id => stopVideo(id));
});
