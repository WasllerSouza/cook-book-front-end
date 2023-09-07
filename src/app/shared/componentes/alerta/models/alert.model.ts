type MessageType = 'warn' | 'error';
export type Alert = {
  messageType: MessageType,
  message: string[]
}
