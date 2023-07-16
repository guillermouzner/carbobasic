import {db} from "@/lib/db";
import {PostItem} from "@/components/post-item";
import {EmptyPlaceholder} from "@/components/empty-placeholder";
// import {getCurrentUser} from "@/lib/session";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await db.post.findMany({
    where: {
      authorId: process.env.AUTHOR_ID,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <div>
      <div>
        {posts?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {posts.map((post) => (
              <PostItem key={post.id + "123"} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>Any posts yet.</EmptyPlaceholder.Description>
          </EmptyPlaceholder>
        )}
      </div>
    </div>
  );
}
