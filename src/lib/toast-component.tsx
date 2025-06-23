import Toast from '@/components/ui/toast';
import { toast as sonnerToast } from 'sonner';

// Defines the properties for the toast utility function.
// It omits the 'id' property from your ToastProps because 'sonner' will provide it.
export function toast(toast: Omit<ToastProps, 'id'>) {
    // Calls `sonnerToast.custom` to render a custom React component as a toast.
  // `sonner` provides the `id` for the toast, which is then passed to your `Toast` component.
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
  id: string | number; // Unique ID for the toast.
  title?: string; // Optional title.
  description?: string; // Optional description.
  variant?: ToastVariant; // Optional variant (type of toast).
}