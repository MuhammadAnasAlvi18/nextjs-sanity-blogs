import { blogCardTypes } from '@/lib/interface'
import {
    Card,
    CardContent
  } from "@/components/ui/card"
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


interface BlogCardProps {
  data: blogCardTypes[]
}

const Blogs = ({data} : BlogCardProps) => {

  return (
    <div className='grid grid-cols-2 gap-12'>
        {
            data.map((post, idx)=>{
                return(
                    <Card key={idx}>
                        <Image src={urlFor(post.titleImage).url()} className='w-full h-[300px] object-cover rounded-t-lg' alt='image' width={500} height={500} priority />
                        <CardContent className='mt-5 flex flex-col flex-1'>
                            <h3 className='text-2xl font-semibold line-clamp-2'>{post.title}</h3>
                            <p className='line-clamp-3 text-base font-medium mt-3'>{post.smallDescription}</p>
                            <Button asChild className='w-full mt-6'>
                                <Link href={`/blog/${post.currentSlug}`} className='dark:text-white'>Read More</Link>
                            </Button>
                        </CardContent>
                    </Card>
                )
            })
        }
    </div>
  )
}

export default Blogs