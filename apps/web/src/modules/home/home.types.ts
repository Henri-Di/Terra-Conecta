import type React from 'react';

export type IconComponent = React.ComponentType<{
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}>;

export type ToastTone = 'success' | 'info' | 'warning';

export type ToastState = {
  visible: boolean;
  title: string;
  message: string;
  tone: ToastTone;
};

export type MainAction = {
  icon: IconComponent;
  title: string;
  subtitle: string;
  helper: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
  shadowColor: string;
  onClick: () => void;
};

export type QuickAction = {
  icon: IconComponent;
  label: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
  hoverGlow: string;
  onClick: () => void;
};

export type NavItem = {
  icon: IconComponent;
  label: string;
  path?: string;
};