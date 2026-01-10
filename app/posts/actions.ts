"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deletePost(postId: number) {
  try {
    await prisma.post.delete({
      where: {
        id: postId,
      },
    });
    revalidatePath("/posts");
    return { success: true };
  } catch (error) {
    console.error("Error deleting post:", error);
    return { success: false, error: "Failed to delete post" };
  }
}
