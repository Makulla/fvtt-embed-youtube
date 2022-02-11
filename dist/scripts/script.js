if(window.fvttYtHookId) {
   Hooks.off('createChatMessage', window.fvttYtHookId);
}

window.fvttYtHookId = Hooks.on("createChatMessage", msg => {

let split = msg.data.content.split(':');

if(split[0] !== 'YTVID') { return; }

window.fvttYtDialog = window.fvttYtDialog ?? new Dialog({ 
    title: 'YT Player', 
    buttons: {}, 
    close: () => {
    window.fvttYtDialog = undefined,
    ChatMessage.create({ content: '<p>' + Users.instance.current.name +  ' Closed his YT Player</p>' })
    }
}, 
{ 
    width: 470,
    height: 300,
    resizable: true,
    minimizable: true
});

const ytVidId = split[1];

if(window.fvttYtDialog.data.ytVidId === ytVidId) { return }

const content = '<iframe \
    width="450" \
    height="250" \
    allow="autoplay" \
    src="https://www.youtube.com/embed/' + ytVidId + '?&autoplay=1&loop=1&playlist=' + ytVidId + '" \
    frameborder="0" \
';

window.fvttYtDialog.data.content = content;
window.fvttYtDialog.data.ytVidId = ytVidId;

window.fvttYtDialog.render(true);
});