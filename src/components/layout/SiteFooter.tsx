type SiteFooterProps = {
  text: string;
};

export function SiteFooter({ text }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container text-center text-sm text-[color:var(--text-muted)]">{text}</div>
    </footer>
  );
}
