"use client";

import { deletePost } from "../actions";
import { useTransition, useState } from "react";
import { showToast } from "nextjs-toast-notify";
import { AlertDialog, Button, Spinner } from "@heroui/react";
import { TrashBin } from "@gravity-ui/icons";

export default function DeletePostButton({
  postId,
  postTitle,
}: {
  postId: number;
  postTitle: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deletePost(postId);

      if (result.success) {
        showToast.success("¡Post deleted successfully!", {
          duration: 3000,
          progress: true,
          position: "top-center",
          transition: "popUp",
          icon: "",
          sound: true,
        });
        setIsOpen(false);
      } else {
        showToast.error("¡Post deletion failed!", {
          duration: 3000,
          progress: true,
          position: "top-center",
          transition: "popUp",
          icon: "",
          sound: true,
        });
      }
    });
  };

  return (
    <AlertDialog isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button variant='danger' onClick={() => setIsOpen(true)}>
        <TrashBin />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className='sm:max-w-100'>
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status='danger' />
              <AlertDialog.Heading className='text-gray-800'>
                Delete post permanently
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete post<strong> {postTitle}</strong>.
                <br />
                This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                className='text-gray-800'
                slot='close'
                variant='tertiary'
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant='danger'
                onClick={handleDelete}
                isPending={isPending}
              >
                {isPending ? <Spinner color='current' size='sm' /> : null}
                {isPending ? "Deleting..." : "Delete Post"}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
