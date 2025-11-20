import { createBrowserClient } from "@supabase/ssr"

let client: ReturnType<typeof createBrowserClient> | null = null

export function getSupabaseBrowserClient() {
  if (client) return client

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    console.warn("[v0] Supabase environment variables not configured")
    return null
  }

  try {
    client = createBrowserClient(url, key)
    return client
  } catch (error) {
    console.error("[v0] Failed to create Supabase client:", error)
    return null
  }
}
