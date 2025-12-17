export default function FeedPage() {
  return (
    <div className="min-h-screen bg-fefbf3 pt-30">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Instagram-style layout: main feed + sidebar */}
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main feed (center column) */}
          <div className="space-y-6">
            {/* Post cards */}
            <article className="rounded-xl border border-amber-100 bg-white shadow-sm">
              {/* Header: avatar + name */}
              <div className="flex items-center gap-3 p-4">
                <div className="h-10 w-10 rounded-full bg-amber-200" />
                <div>
                  <p className="text-sm font-semibold text-4f2d20">
                    Coffee Explorer
                  </p>
                  <p className="text-xs text-neutral-500">2 hours ago</p>
                </div>
              </div>

              {/* Image */}
              <img
                src={`${import.meta.env.BASE_URL}recipes/1.webp`}
                alt="Post"
                className="w-full"
              />

              {/* Actions + caption */}
              <div className="p-4">
                <div className="mb-2 flex gap-4 text-2xl">
                  <button>♡</button>
                  <button>💬</button>
                </div>
                <p className="text-sm text-4f2d20">
                  <span className="font-semibold">coffee_explorer</span> Classic
                  espresso ☕
                </p>
              </div>
            </article>

            {/* More posts... */}
          </div>

          {/* Sidebar (right) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-xl border border-amber-100 bg-white p-6">
                <h3 className="mb-4 text-sm font-semibold text-4f2d20">
                  Suggested
                </h3>
                {/* List of suggestions */}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
