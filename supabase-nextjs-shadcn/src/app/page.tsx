import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Supabase + Next.js + shadcn/ui</h1>
      <p className="max-w-md text-muted-foreground">
        A minimal starter with authentication, server components, and a clean UI.
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Sign in
        </Link>
        <Link
          href="/sign-up"
          className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          Create account
        </Link>
      </div>
    </main>
  )
}
