export type OriaTab = 'texto' | 'voz' | 'imagem';
export type ChatRole = 'user' | 'assistant';
export type PermissionStateType = 'idle' | 'granted' | 'denied' | 'unsupported';

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};