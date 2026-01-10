import prisma from "@/lib/prisma";
import DeletePostButton from "./components/DeletePostButton";
import FilterForm from "./components/FilterForm";
import { Card, Link } from "@heroui/react";
import { ArrowUpRightFromSquare } from "@gravity-ui/icons";

type SearchParams = {
  authorId?: string;
  orderBy?: string;
};

export default async function Posts({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const authorId = params?.authorId;
  const orderBy = params?.orderBy || "id-desc";

  // Parse orderBy into field and direction
  const [orderField, orderDirection] = orderBy.split("-") as [
    string,
    "asc" | "desc",
  ];

  const posts = await prisma.post.findMany({
    where: authorId
      ? {
          userId: parseInt(authorId),
        }
      : undefined,
    include: {
      user: true,
    },
    orderBy:
      orderField === "authorName"
        ? { user: { name: orderDirection } }
        : orderField === "authorId"
        ? { userId: orderDirection }
        : { id: orderDirection },
  });

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className='min-h-screen bg-slate-100 flex flex-col items-center justify-center -mt-16 text-neutral-800'>
      <h1 className='text-4xl font-bold mb-8'>Posts</h1>
      <FilterForm
        users={users}
        currentAuthorId={authorId}
        currentOrderBy={orderBy}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4'>
        {posts.map((post) => (
          <Card key={post.id} className='w-100'>
            <div className='absolute top-3 right-3 z-10'>
              <Link href={`/posts/${post.id}`}>
                <ArrowUpRightFromSquare className='cursor-pointer text-neutral-500 hover:text-blue-600 transition-colors w-6 h-6' />
              </Link>
            </div>
            <Card.Header>
              <Card.Title className='text-gray-800 text-lg font-bold'>
                {post.title}
              </Card.Title>
              <Card.Description>
                by{" "}
                <span className='font-semibold text-gray-500'>
                  {post.user.name}
                </span>
              </Card.Description>
            </Card.Header>
            <Card.Content>
              {post.body.slice(0, 100)}
              {post.body.length > 100 ? "..." : ""}
            </Card.Content>
            <Card.Footer className='justify-end'>
              <DeletePostButton postId={post.id} postTitle={post.title} />
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
}
