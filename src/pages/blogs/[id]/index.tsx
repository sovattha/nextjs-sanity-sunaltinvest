import 'aos/dist/aos.css'

import AOS from 'aos'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { Heading } from '~/components/common/Heading'
import { blogs } from '~/data/index'

interface BlogDetails {
  id: number
  title: string
  date: string
  author: string
  desc: string
  content: React.ReactNode
}

const BlogDetailsPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [selectedBlog, setSelectedBlog] = useState<BlogDetails | null>(null)

  useEffect(() => {
    AOS.init()
    if (id) {
      getBlog(id as string)
    }
  }, [id])

  const getBlog = (blogId: string) => {
    const selectedBlog = blogs.find((blog) => blog.id === parseInt(blogId))
    setSelectedBlog(selectedBlog || null)
  }

  if (!selectedBlog) {
    return <p>Loading...</p>
  }

  return (
    <section className="container" id="blogDetails">
      <Heading title={selectedBlog.title} />
      <div className="wrapper-blog">
        <div data-aos="fade-up">
          <span>
            Date de publication: {selectedBlog.date} - Auteur:{' '}
            {selectedBlog.author}
          </span>
          <p>{selectedBlog.desc}</p>
        </div>
        <div className="blog-content" data-aos="fade-up">
          {selectedBlog.content}
        </div>
      </div>
    </section>
  )
}

export default BlogDetailsPage
