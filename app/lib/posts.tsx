import { query } from "@/app/lib/hashnode";
import { Post } from "@/app/types/posts";

export async function getPostBySlug(slug: string) {
  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!, $slug: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            author {
              name
              profilePicture
              socialMediaLinks {
                twitter
              }
            }
            content {
              html
            }
            coverImage {
              url
            }
            id
            publishedAt
            title
          }
        }
      }
    `,
    variables: {
      host: process.env.HASHNODE_HOST,
      slug,
    },
  });

  const post = publication?.post as Post;

  return post;
}
