interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

/** 집 아이콘 */
export function LogoSymbol({ width = 56, height = 35, className }: LogoProps) {
  return (
    <svg width={width} height={height} className={className}>
      <use href="/icon.svg#logo-symbol" />
    </svg>
  );
}

/** 텍스트 로고 */
export function LogoText({ width = 98, height = 31, className }: LogoProps) {
  return (
    <svg width={width} height={height} className={className}>
      <use href="/icon.svg#logo-text" />
    </svg>
  );
}

/** 하단 텍스트 로고 */
export function LogoTextBottom({
  width = 97,
  height = 9,
  className,
}: LogoProps) {
  return (
    <svg width={width} height={height} className={className}>
      <use href="/icon.svg#logo-text-bottom" />
    </svg>
  );
}
