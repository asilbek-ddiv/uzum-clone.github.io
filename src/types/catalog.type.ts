interface Child {
  id: number;
  name: string;
  slug: string;
}

interface CatalogChild {
  id: number;
  title: string;
  slug: string;
  children: Child[];
}

export interface CatalogProps {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  children: CatalogChild[];
}