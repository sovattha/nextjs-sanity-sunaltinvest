import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Card from '~/components/Card'
import Home from '~/components/common/Home'
import RootContainer from '~/components/common/RootContainer'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  // Exemple of how to get data from sanity
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  // {
  //   return (
  //       <section>
  //         {posts.length ? (
  //           posts.map((post) => <Card key={post._id} post={post} />)
  //         ) : (
  //           <h1>Hello</h1>
  //         )}
  //       </section>
  //   )
  // }

  return <Home />
}
