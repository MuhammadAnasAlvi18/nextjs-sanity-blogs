import { Any } from "next-sanity";

export interface blogCardTypes {
    title: string;
    currentSlug: string;
    smallDescription: string;
    titleImage: string
}

export interface blogDetailTypes {
    title: string;
    currentSlug: string;
    smallDescription: string;
    titleImage: string;
    content: Any[]
}