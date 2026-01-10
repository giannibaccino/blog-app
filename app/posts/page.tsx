import prisma from "@/lib/prisma";
import DeletePostButton from "./components/DeletePostButton";
import FilterForm from "./components/FilterForm";
import { Card, Link } from "@heroui/react";
import { ArrowUpRightFromSquare } from "@gravity-ui/icons";
import ToastNotification from "../components/ToastNotification";

type SearchParams = {
  authorId?: string;
  orderBy?: string;
  success?: string;
};

export default async function Posts({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const authorId = params?.authorId;
  const orderBy = params?.orderBy || "id-desc";

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
    <div className='min-h-screen bg-slate-100 flex flex-col items-center justify-center  text-neutral-800'>
      <ToastNotification />
      <h1 className='text-4xl font-bold m-8'>Posts</h1>
      <FilterForm
        users={users}
        currentAuthorId={authorId}
        currentOrderBy={orderBy}
      />
      {posts.length === 0 ? (
        <div className='flex flex-col items-center justify-center py-16'>
          <div className='text-center'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-2'>
              No posts found
            </h2>
            <p className='text-gray-500'>
              {authorId
                ? "Try selecting a different author or reset the filters."
                : "There are no posts available at the moment."}
            </p>
          </div>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-4'>
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
                  <Link
                    href={`/users/${post.user.id}`}
                    className='text-neutral-600 hover:text-blue-600 transition-colors'
                  >
                    <span className='font-semibold text-gray-500'>
                      {post.user.name}
                    </span>
                  </Link>
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
      )}
    </div>
  );
}
