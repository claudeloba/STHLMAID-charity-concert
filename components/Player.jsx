import Artist from "@/components/Artist";

const spotifyPreviewUrls = [
  "https://p.scdn.co/mp3-preview/6rqhFgbbKwnb9MLmUQDhG6?cid=YOUR_SPOTIFY_CLIENT_ID",
  "https://p.scdn.co/mp3-preview/6rqhFgbbKwnb9MLmUQDhG7?cid=YOUR_SPOTIFY_CLIENT_ID",
  "https://p.scdn.co/mp3-preview/6rqhFgbbKwnb9MLmUQDhG8?cid=YOUR_SPOTIFY_CLIENT_ID",
  "https://p.scdn.co/mp3-preview/6rqhFgbbKwnb9MLmUQDhG9?cid=YOUR_SPOTIFY_CLIENT_ID",
  "https://p.scdn.co/mp3-preview/6rqhFgbbKwnb9MLmUQDhGA?cid=YOUR_SPOTIFY_CLIENT_ID",
  "https://p.scdn.co/mp3-preview/6rqhFgbbKwnb9MLmUQDhGB?cid=YOUR_SPOTIFY_CLIENT_ID",
  "https://p.scdn.co/mp3-preview/6rqhFgbbKwnb9MLmUQDhGC?cid=YOUR_SPOTIFY_CLIENT_ID",
];

export default function Player() {
  // Generate all image paths
  const lines = 5;
  const imagesPerLine = 7;
  const images = [];

  for (let line = 1; line <= lines; line++) {
    for (let img = 1; img <= imagesPerLine; img++) {
      images.push({
        imageSrc: `/images/line${line}/${img}.png`,
        spotifyPreviewUrl:
          spotifyPreviewUrls[
            (line - 1) * imagesPerLine + ((img - 1) % spotifyPreviewUrls.length)
          ],
      });
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-8">No filler. All fire.</h1>
        <div className="flex flex-wrap gap-6">
          {images.map((img, idx) => (
            <Artist
              key={idx}
              imageSrc={img.imageSrc}
              spotifyPreviewUrl={img.spotifyPreviewUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
