import BlogDetails from '@/app/components/BlogDetails';
import { blogDetailTypes } from '@/lib/interface';
import { client } from '@/lib/sanity';
import React from 'react'

export const revalidate = 30;

async function blogData(slug: string){
    const query = `*[_type == "blogs" && slug.current == "${slug}"] {
        title,
        smallDescription,
        "currentSlug" : slug.current,
        titleImage,
        content
    }[0]`

    const data = await client.fetch(query);

    return data;
}

const page = async ({params} : {params: {slug: string}}) => {
    const data : blogDetailTypes = await blogData(params.slug);
  return (
    <div>
        <BlogDetails data={data} />
    </div>
  )
}

export default page