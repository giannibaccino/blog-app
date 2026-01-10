import prisma from "@/lib/prisma";
import Link from "next/dist/client/link";
import { notFound } from "next/navigation";

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) },
    include: {
      user: true,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-slate-100 flex flex-col items-center justify-center text-neutral-800'>
      <article className='max-w-2xl space-y-4 text-center'>
        <h1 className='text-4xl font-bold text-neutral-800 text-center'>
          {post.title}
        </h1>
        <Link
          href={`/users/${post.user.id}`}
          className='text-neutral-600 hover:text-blue-600 transition-colors text-sm'
        >
          by {post.user.name}
        </Link>
        <div className='prose prose-gray mt-8 text-gray-800'>
          {post.body || "No content available."}
        </div>
      </article>
    </div>
  );
}
