// app/components/Icon.tsx
import { Icon as Iconify } from "@iconify/react";
import icons from "@/data/icons.json";

type Props = { name: keyof typeof icons; className?: string };

export function Icon({ name, className }: Props) {
  return <Iconify icon={icons[name]} className={className} />;
}
