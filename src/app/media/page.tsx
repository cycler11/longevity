import { MediaHorizontalScroller } from "@/components/media/MediaHorizontalScroller";
import { mediaEvents } from "@/data/media-events";

export default function MediaPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <MediaHorizontalScroller events={mediaEvents} />
    </main>
  );
}

