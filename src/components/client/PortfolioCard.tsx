"use client";
import site_config from "@/site-config.json";
import type { portfolioConfig } from "@/lib/types";

interface PortfolioCardProps {
  item: portfolioConfig & { images?: string[] };
}
const enriched = site_config.bEnriched;

export function PortfolioCard({ item }: PortfolioCardProps) {
  const firstImage = item.images?.[0] ?? null;

  return (
    <a href={`/portfolio/${item.id}`} className="group block bg-muted border border-border/50 overflow-hidden hover:border-foreground/20 relative hover:bg-card active:scale-100 hover:scale-102 animation select-none">
      {site_config.bEnriched && firstImage && (
        <div className="aspect-4/3 overflow-hidden">
          <img loading="lazy" width={1200} src={firstImage} alt={item.data.title} className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 animation" />
        </div>
      )}

      <div className={ enriched ? 'p-3 bg-muted group-hover:bg-card animation z-10 group-hover:-translate-y-14 h-20 translate-y-0' : 'p-3 bg-muted group-hover:bg-card animation z-10'}>
        <span className={ enriched ? 'text-xs uppercase tracking-widest text-muted-foreground opacity-100 group-hover:opacity-0 animation' : 'text-xs uppercase tracking-widest text-muted-foreground'}>{item.data.category}</span>

        <h3 className={ enriched ? 'mt-2 text-lg group-hover:font-medium leading-snug text-foreground/80 group-hover:text-foreground/90 animation mb-0.5 line-clamp-1 -translate-y-1 group-hover:-translate-y-8.5' : 'mt-2 text-lg group-hover:font-medium leading-snug text-foreground/80 group-hover:text-foreground/90 animation mb-0.5 line-clamp-1'}>{item.data.title}</h3>

        {item.data.tags && item.data.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {item.data.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={ enriched ? 'text-xs px-2 py-0.5 bg-muted/60 text-muted-foreground/80 rounded-sm border border-border scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 animation translate-y-5.5' : 'text-xs px-2 py-0.5 bg-muted/60 text-muted-foreground/80 rounded-sm border border-border'}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className={ enriched ? 'text-sm text-muted-foreground line-clamp-2 opacity-0 group-hover:opacity-100 animation -translate-y-7 group-hover:-translate-y-15' : 'text-sm text-muted-foreground line-clamp-2 mt-4'}>{item.data.description}</p>
      </div>
    </a>
  );
}
