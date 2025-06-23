import Toast from '@/components/ui/toast';
import { toast as sonnerToast } from 'sonner';

export function toast(toast: Omit<ToastProps, 'id'>) {
  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      title={toast.title}
      description={toast.description}
      variant={toast.variant || "info"}
    />
  ),{duration: 1500});
}

export type ToastVariant = "info" | "error";

interface ToastProps {
  id: string | number;
  title?: string;
  description?: string;
  variant?: ToastVariant;
}