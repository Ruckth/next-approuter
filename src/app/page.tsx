import { db } from "~/server/db";
import { images as imagesSchema } from "~/server/db/schema";
import LottieAnimation from "./_components/LottieAnimation";

export const dynamic = "force-dynamic";

interface Image {
  id: number;
  url: string;
  name: string;
}

export default async function HomePage() {
  const images: Image[] = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="text-center">
    <h1 style={{ fontSize: '2em' }}>We are currently under Development phase</h1>
      <br />
      <LottieAnimation src="https://lottie.host/6b4119fd-167f-43c4-bbab-cbbe5fcd2c9b/tic9pQ6MRZ.json" />
      <div className="justify-center flex flex-wrap gap-3">
        {images.map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} alt={image.name} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
