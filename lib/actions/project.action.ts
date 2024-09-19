"use server";
import { ID } from "node-appwrite";
import { InputFile } from "node-appwrite/file";
import { createAdminClient } from "../appwrite";
import {
  APPWRITE_ENDPOINT,
  APPWRITE_PROJECT_ID,
  BUCKET_ID,
  DATABASE_ID,
  PROJECT_COLLECTION_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";

export const addProject = async ({ thumbnail, ...project }: ProjectParams) => {
  const { storage, database } = await createAdminClient();
  let file;
  try {
    if (thumbnail) {
      const inputFile = InputFile.fromBuffer(
        thumbnail?.get("blobFile") as Blob,
        thumbnail?.get("fileName") as string
      );
      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
      if (!file) {
        throw new Error("Failed to upload the file");
      }
      console.log("File uploaded successfully");
    }
    const newProject = await database.createDocument(
      DATABASE_ID!,
      PROJECT_COLLECTION_ID!,
      ID.unique(),
      {
        ...project,
        thumbnailId: file ? file?.$id : null,
        thumbnail: file
          ? `${APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${APPWRITE_PROJECT_ID}`
          : null,
      }
    );
    return parseStringify(newProject);
  } catch (error) {
    if (file) {
      try {
        await storage.deleteFile(BUCKET_ID!, file.$id);
        console.log("File deleted successfully after document creation error");
      } catch (deleteError) {
        console.log(
          "Failed to delete the file after document creation error:",
          deleteError
        );
      }
    }
    console.log(error);
    return { error: "something went wrong! Try again later." };
  }
};
