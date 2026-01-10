"use client";

import { Funnel, FunnelXmark } from "@gravity-ui/icons";
import { Button, Form, Label, ListBox, Select } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function FilterForm({
  users,
  currentAuthorId,
  currentOrderBy,
}: {
  users: User[];
  currentAuthorId?: string;
  currentOrderBy: string;
}) {
  const router = useRouter();
  const [authorId, setAuthorId] = useState(currentAuthorId || "");
  const [orderBy, setOrderBy] = useState(currentOrderBy);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (authorId) {
      params.set("authorId", authorId);
    }

    if (orderBy && orderBy !== "id-desc") {
      params.set("orderBy", orderBy);
    }

    const queryString = params.toString();
    router.push(`/posts${queryString ? `?${queryString}` : ""}`);
  };

  const handleReset = () => {
    setAuthorId("");
    setOrderBy("id-desc");
    router.push("/posts");
  };

  return (
    <Form className='flex gap-4 mb-6' onSubmit={handleApply}>
      <Select
        className='w-[256px]'
        placeholder='All Authors'
        value={authorId}
        onChange={(key) => setAuthorId(key as string)}
      >
        <Label>Filter by Author</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox className='text-neutral-800'>
            <ListBox.Item id='' textValue='All Authors'>
              All Authors
              <ListBox.ItemIndicator />
            </ListBox.Item>
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
      </Select>
      <Select
        className='w-[256px]'
        placeholder='Select order'
        value={orderBy}
        onChange={(key) => setOrderBy(key as string)}
      >
        <Label>Order by</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox className='text-neutral-800'>
            <ListBox.Item id='id-asc' textValue='Post ID (Ascending)'>
              Post ID (Ascending)
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id='id-desc' textValue='Post ID (Descending)'>
              Post ID (Descending)
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id='authorId-asc' textValue='Author ID (Ascending)'>
              Author ID (Ascending)
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id='authorId-desc' textValue='Author ID (Descending)'>
              Author ID (Descending)
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id='authorName-asc' textValue='Author Name (A-Z)'>
              Author Name (A-Z)
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id='authorName-desc' textValue='Author Name (Z-A)'>
              Author Name (Z-A)
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
      <div className='flex gap-2 items-end'>
        <Button type='submit'>
          <Funnel />
          Filter
        </Button>
        <Button type='button' variant='secondary' onClick={handleReset}>
          <FunnelXmark />
          Reset Filters
        </Button>
      </div>
    </Form>
  );
}
