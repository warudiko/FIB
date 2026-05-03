/** Cap indexed body size so `data-search` stays reasonable on listing pages. */
const DEFAULT_BODY_MAX = 20_000;

type CardData = {
  title: string;
  short?: string;
  heroTagline?: string;
  tags?: string[];
};

export type CardSearchEntry = {
  slug: string;
  data: CardData;
  body?: string;
};

/**
 * Text used for client-side card filtering: frontmatter fields plus a slice of the
 * page markdown/MDX body so queries match in-page copy, not only card blurbs.
 */
export function cardSearchTextFromEntry(
  entry: CardSearchEntry,
  bodyMaxChars: number = DEFAULT_BODY_MAX,
): string {
  const { data, slug } = entry;
  const front = [data.title, data.short, data.heroTagline, slug, ...(data.tags ?? [])]
    .filter(Boolean)
    .join(" • ");

  const raw = typeof entry.body === "string" ? entry.body.trim() : "";
  if (!raw) return front;

  const body = raw.length > bodyMaxChars ? raw.slice(0, bodyMaxChars) : raw;
  return `${front} • ${body}`;
}
