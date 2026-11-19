import Image from "next/image";
import { site } from "@/lib/site";

type LogoVariant = "header" | "footer";

const classNames: Record<LogoVariant, string> = {
  header: "h-14 w-auto max-w-[min(300px,58vw)] sm:h-16 lg:h-[4.5rem] lg:max-w-[340px]",
  footer: "h-[4.25rem] w-auto sm:h-20 lg:h-[5.5rem] lg:max-w-[380px]",
};

const dimensions: Record<LogoVariant, { width: number; height: number }> = {
  header: { width: 340, height: 96 },
  footer: { width: 380, height: 108 },
};

export function Logo({
  variant = "header",
  priority = false,
}: {
  variant?: LogoVariant;
  priority?: boolean;
}) {
  const { width, height } = dimensions[variant];

  return (
    <Image
      src={site.logoPath}
      alt={site.legalName}
      width={width}
      height={height}
      className={classNames[variant]}
      priority={priority}
    />
  );
}
