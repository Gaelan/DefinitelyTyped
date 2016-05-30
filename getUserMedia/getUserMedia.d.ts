interface Navigator {
  mediaDevices: MediaDevices;
}

interface MediaStream {
  id: string;
  // @todo other properties
}
interface MediaDevices {
  getUserMedia(
    options: MediaStreamConstraints
  ) : Promise<MediaStream>;
}

// @todo Add support for constraints.
interface MediaStreamConstraints {video?: boolean, audio?: boolean}

interface AudioContext {
  createMediaStreamSource(stream: MediaStream): AudioNode;
}

declare class MediaRecorder {
  constructor(stream: MediaStream, mimeType?: string)
  stream: MediaStream
  state: string
  pause(): void
  requestData(): void
  resume(): void
  start(): void
  stop(): void
  ondataavailable: (ev: Event & {data: Blob}) => any;
  onstart: (ev: Event) => any;
  onstop: (ev: Event) => any;
  onpause: (ev: Event) => any;
  onresume: (ev: Event) => any;
  onerror: (ev: Event) => any;
}
