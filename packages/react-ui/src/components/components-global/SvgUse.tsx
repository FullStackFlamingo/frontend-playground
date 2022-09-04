interface SvgUseProps {
  href: string;
}

export function SvgUse({ href }: SvgUseProps) {
  return (
    <svg role="presentation" focusable="false">
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={href} href={href} role="presentation"></use>
    </svg>
  );
}
