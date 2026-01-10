import Form from "next/form";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FilePlus } from "@gravity-ui/icons";
import {
  Description,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
  TextArea,
  ListBox,
  Select,
} from "@heroui/react";

export default async function NewPost() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  async function createPost(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    const userId = parseInt(formData.get("user") as string);

    await prisma.post.create({
      data: {
        title,
        body,
        userId,
      },
    });

    revalidatePath("/posts");
    redirect("/posts?success=true");
  }

  return (
    <div className='min-h-screen bg-slate-100 flex flex-col items-center justify-center text-neutral-800'>
      <h1 className='text-4xl font-bold m-8'>Create Post</h1>
      <Form
        className='w-full max-w-md space-y-4 rounded-lg border border-border bg-surface p-6'
        action={createPost}
      >
        <TextField isRequired name='title'>
          <Label className='text-sm font-medium text-neutral-800'>Title</Label>
          <Input
            className='rounded-full border-border/60'
            placeholder='Enter your title'
          />
          <FieldError className='text-xs'>{`Title can't be empty`}</FieldError>
        </TextField>
        <Select placeholder='Select Author' name='user' isRequired>
          <Label className='text-sm font-medium text-neutral-800'>Author</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Description />
          <Select.Popover>
            <ListBox className='text-neutral-800'>
              {users.map((user) => (
                <ListBox.Item
                  key={user.id}
                  id={user.id.toString()}
                  textValue={user.name}
                >
                  {user.name}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
          <FieldError>Must select an author</FieldError>
        </Select>
        <Label className='text-sm font-medium text-neutral-800'>Content</Label>
        <TextArea
          minLength={10}
          aria-label='Post content'
          className='h-32 w-96'
          placeholder='Write your post content here...'
          name='body'
        />
        <Button type='submit' className='w-full'>
          <FilePlus />
          Create post
        </Button>
      </Form>
    </div>
  );
}
