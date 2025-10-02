// app/components/Icon.tsx
import { Icon as Iconify } from "@iconify/react";
// 상대 경로로 직접 지정
import icons from "@/app/data/icons";


type Props = { name: keyof typeof icons; className?: string };

export function Icon({ name, className }: Props) {
  return <Iconify icon={icons[name]} className={className} />;
}
