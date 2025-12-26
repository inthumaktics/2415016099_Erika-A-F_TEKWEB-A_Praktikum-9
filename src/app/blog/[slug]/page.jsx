import Link from "next/link";
import { posts } from "../../../data/posts";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetail({ params }) {
  // 1. Ambil slug dari URL
  const { slug } = await params;

  // 2. Cari data yang sesuai dengan slug
  const post = posts.find((p) => p.slug === slug);

  // 3. Handle jika data tidak ditemukan (404 sederhana)
  if (!post) {
    return (
      <div className="text-center text-red-500 mt-10">Article not found</div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="text-gray-500 mb-8">
        By {post.author} on {post.date}
      </div>

      <div className="prose lg:prose-xl">
        <p>{post.content}</p>
      </div>

      <br />

      <Link href="/blog" className="text-blue-600 hover:underline">
        &larr; Back to Blog List
      </Link>
    </article>
  );
}
