import Link from "next/link";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

export const dynamic = "force-dynamic";

// mockup urls

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy:(model,{desc}) =>desc(model.id),
  });

  return (
    <main className="text-center">
      Hi (Images) <br />
      <div className="justify-center flex flex-wrap gap-3">
        {[...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
