type KnownEvents = "play-video";

interface SocketLibSocket {
    executeForEveryone(event: KnownEvents, arg: string);
    register(event: KnownEvents, handler: (arg: string) => void);
}

declare const socketlib = {
    registerModule(module: "embed-youtube"): SocketLibSocket;
}