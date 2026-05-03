/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL?: string;
  readonly PUBLIC_SUPABASE_ANON_KEY?: string;
  /** JSON endpoint returning `{ "count": number }` (CORS must allow this site). */
  readonly PUBLIC_VISITOR_STATS_URL?: string;
}

