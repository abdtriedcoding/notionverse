import { TagFrequencyMap } from "@/types";
import { getAllPosts } from "./getAllPosts";

export const calculateTagFrequency = async (): Promise<TagFrequencyMap> => {
  const posts = await getAllPosts();
  let allTags: string[] = [];
  const tagFrequencyMap: TagFrequencyMap = {};

  // Concatenate tags from posts into allTags array
  posts.forEach((post) => {
    allTags = [...allTags, ...post.tags];
  });

  // Create a frequency map of tags
  allTags.forEach((tag) => {
    tagFrequencyMap[tag] = (tagFrequencyMap[tag] || 0) + 1;
  });

  return tagFrequencyMap;
};
