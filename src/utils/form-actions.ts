"use server";
import { revalidatePath } from "next/cache";
import db from "./db";

export const newToDo = async (formData) => {
  const todo = await db.toDo.create({
    data: {
      title: formData.get('title')
    },
  });

  revalidatePath('/todos');
};

export const deleteToDo = async ({todo}) => {
  await db.toDo.delete(todo)
}
