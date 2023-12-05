import { type } from "os";

export interface LinkItem {
  id: number;
  name: string;
  to: string;
}

export type FooterNavItem = {
  name: string;
  href: string;
  icon: any;
};

export type PostItem = {
  id: string;
  title: string;
  date: string;
  type: string;
  slug: string;
  status: string;
  tags: string[];
  summary: string[];
};

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export type TagFrequencyMap = {
  [tag: string]: number;
};
