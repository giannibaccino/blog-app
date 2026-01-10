import prisma from "@/lib/prisma";
import { Avatar, Card, Description, Label, Link } from "@heroui/react";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className='min-h-screen bg-slate-100 flex flex-col items-center justify-center text-neutral-800'>
      <h1 className='text-4xl font-bold m-8'>Users</h1>
      <Card className='w-100 mb-8 p-4'>
        <ul aria-label='Users'>
          {users.map((user) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              underline='none'
              className='w-full hover:bg-blue-100 hover:cursor-pointer rounded-md block mb-2'
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
      </Card>
    </div>
  );
}
