interface VideoEmbedProps {
  /** The YouTube video ID, e.g. "cJf6P82O_ew" */
  youtubeId: string
  /** Accessible title for the embedded player */
  title: string
}

export function VideoEmbed({ youtubeId, title }: VideoEmbedProps) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-md border border-primary/10 bg-black"
      style={{ paddingTop: '56.25%' }}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
