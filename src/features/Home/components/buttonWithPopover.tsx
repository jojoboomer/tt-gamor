import Button, { type ButtonProps } from "@/components/ui/buttom";
import ReactPopover from "@/components/ui/popover";

interface ButtonWithPopoverProps extends Omit<ButtonProps, "content"> {
  content: React.ReactNode;
}
const ButtonWithPopover = ({
  content,
  children,
  ...props
}: ButtonWithPopoverProps) => (
  <ReactPopover content={content}>
    <Button {...props} variant="text" className="hover:scale-120">
      {children}
    </Button>
  </ReactPopover>
);

export default ButtonWithPopover