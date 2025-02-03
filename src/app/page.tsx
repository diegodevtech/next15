import Link from "next/link"

const Home = () => {
  return (
    <div>
      <h1 className="text-8xl">Home</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </div>
  )
}

export default Home