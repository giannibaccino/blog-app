import prisma from "@/lib/prisma";
import { ArrowUpRightFromSquare } from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react";
import { notFound } from "next/navigation";

export default async function User({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
    include: {
      posts: true,
      company: true,
      address: true,
    },
  });

  if (!user) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16'>
      <Card className='w-100'>
        <Card.Header>
          <Card.Title className='text-gray-800 text-lg font-bold'>
            {user.name}
          </Card.Title>
          <Card.Description></Card.Description>
        </Card.Header>
        <Card.Content>
          <ul className='list-disc list-inside ml-4 text-neutral-700'>
            <li>
              <span className='font-bold'>Email:</span> {user.email}
            </li>
            <li>
              <span className='font-bold'>Phone:</span> {user.phone}
            </li>
            <li>
              <span className='font-bold'>Website:</span> {user.website}
            </li>
            {user.company && (
              <li>
                <span className='font-bold'>Company:</span> {user.company.name}
              </li>
            )}
            {user.address && (
              <li>
                <span className='font-bold'>Address:</span>{" "}
                {user.address.street}, {user.address.suite}, {user.address.city}
                , {user.address.zipcode}
              </li>
            )}
          </ul>
        </Card.Content>
        <Card.Footer className='border-t border-gray-800 flex flex-col'>
          <h2 className='text-gray-800 text-md font-bold'>Posts</h2>
          <ol className='list-disc list-inside ml-4'>
            {user.posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/posts/${post.id}`}
                  className='text-neutral-600 hover:underline'
                >
                  {post.title.slice(0, 50)}
                  {"..."}
                  <ArrowUpRightFromSquare className='inline-block w-4 h-4' />
                </Link>
              </li>
            ))}
          </ol>
        </Card.Footer>
      </Card>
    </div>
  );
}
