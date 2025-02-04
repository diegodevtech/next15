import Link from "next/link"

// as a client component, it only works if it uses the use() hook
// as well as the use cleint directive

async function NewsArticle({params, searchParams}: {
  params: Promise<{articleId: string}>;
  searchParams: Promise<{lang?: "en" | "es" | "fr"}>
}) {
  const { articleId } = (await params);
  const { lang = "en" } = (await searchParams);
  return (
    <div>
      <h1>Article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      </div>
    </div>
  )
}

export default NewsArticle