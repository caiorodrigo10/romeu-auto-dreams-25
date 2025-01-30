import { cn } from "@/lib/utils";
import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const Image = ({ className, alt, ...props }: ImageProps) => {
  return (
    <img
      className={cn("w-auto h-auto max-w-full max-h-full", className)}
      alt={alt}
      {...props}
    />
  );
};

export default Image;