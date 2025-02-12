import { client } from "@/lib/sanity";
import Blogs from "./components/Blogs";
import { blogCardTypes } from "@/lib/interface";

export const revalidate = 30;

async function getBlogs() {
  const query = `*[_type == "blogs"] | order(_createdAt desc){
    title,
    smallDescription,
    "currentSlug" : slug.current,
    titleImage
  }`
  
  const data = await client.fetch(query);

  return data;
}

export default async function Home() {

  const data : blogCardTypes[] = await getBlogs();
  console.log(data);

  return (
    <div className="mt-16">
      <Blogs data={data} />
    </div>
  );
}
