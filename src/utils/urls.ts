export function basePathNoSlash(baseRaw: string | undefined): string {
  const base = baseRaw ?? "/";
  if (base === "/") return "";
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

export function withBase(baseRaw: string | undefined, path: string): string {
  const base = basePathNoSlash(baseRaw);
  if (!path.startsWith("/")) path = `/${path}`;
  return `${base}${path}`;
}

