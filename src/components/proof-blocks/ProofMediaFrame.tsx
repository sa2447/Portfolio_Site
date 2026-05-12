import Image from "next/image";

type ProofMediaFrameProps = {
  src: string;
  alt: string;
  aspectRatio: "16:10" | "16:9";
  priority?: boolean;
};

export function ProofMediaFrame({ src, alt, aspectRatio, priority = false }: ProofMediaFrameProps) {
  const ratioClass = aspectRatio === "16:10" ? "aspect-[16/10]" : "aspect-video";

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-white/15 bg-[color:var(--surface-700)] ${ratioClass}`}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority={priority} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}
