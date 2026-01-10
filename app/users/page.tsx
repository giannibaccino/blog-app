import prisma from "@/lib/prisma";
import { Avatar, Description, Label, Link } from "@heroui/react";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className='min-h-screen bg-slate-100 flex flex-col items-center justify-center -mt-16 text-neutral-800'>
      <ul aria-label='Users' className='w-55'>
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            underline='none'
            className='hover:bg-blue-100 hover:cursor-pointer rounded-md block mb-2'
          >
            <li
              id={user.id.toString()}
              className='flex items-center space-x-4 p-2'
            >
              <Avatar size='sm'>
                <Avatar.Image
                  alt={user.name}
                  src={`https://i.pravatar.cc/150?img=${user.id}`}
                />
              </Avatar>
              <div className='flex flex-col'>
                <Label className='text-neutral-800'>{user.name}</Label>
                <Description>{user.email}</Description>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
