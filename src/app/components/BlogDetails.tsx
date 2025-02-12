import { blogDetailTypes } from '@/lib/interface'
import { urlFor } from '@/lib/sanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import React from 'react'

interface BlogDetailProps {
  data: blogDetailTypes
}

const BlogDetails = ({data} : BlogDetailProps) => {
  return (
    <div className='mt-4 mb-12'>
      <h3 className='text-3xl font-semibold text-center text-primary'>Sanity - Blogs</h3>
      <div className='mt-5'>
        <h1 className='lg:text-5xl text-3xl !leading-[65px] font-bold text-center'>{data.title}</h1>
        <Image src={urlFor(data.titleImage).url()} alt='title image' width={500} height={500} className='w-full h-[500px] object-cover border rounded-lg mt-6' priority />
        <div className='mt-16 prose prose-blue prose-lg prose-li:marker:text-primary prose-a:text-primary prose-code:text-primary dark:prose-invert '>
          <PortableText value={data.content} components={{
                types: {
                    image: ({ value }) => (
                        <Image 
                            src={urlFor(value).url()} 
                            alt={value.alt || "Image"} 
                            className='w-auto rounded-lg'
                            width={800}
                            height={600}
                        />
                    ),
                },
            }} />
        </div>
      </div>
    </div>
  )
}

export default BlogDetails