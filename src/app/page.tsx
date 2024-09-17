import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

// mockup urls
const mockupUrls = [
  "https://utfs.io/f/YuAp8ZPhEJz216AJyUNEmJM97LlkxTui2ANR6pUPtjqBhvso",
  "https://utfs.io/f/YuAp8ZPhEJz2LQoflGX75r0RNdJo1qsUOk4jifBuLwlg8Dyc",
  "https://utfs.io/f/YuAp8ZPhEJz2hvLJKlbjOECAZkJe89NlRuo13sIqL6YPpyFm",
  "https://utfs.io/f/YuAp8ZPhEJz2XZZmvVYsL2scmPZ5MaNIWnS6rQyEfYB4hKl7",
];

const mockImages = mockupUrls.map((url, index) => ({
  id: index + 1,
  url,
}));


export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="text-center">
      Hi (Images) <br />
      <div className="flex gap-2 px-4 py-2">
        {posts.map((post) => (
          <div key={post.id}>
            {post.name}
          </div>
        ))}
      </div>

      <div className="justify-center flex flex-wrap gap-3">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
