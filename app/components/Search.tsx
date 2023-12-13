"use client";

import { Input } from "@/components/ui/input";
import { PostItem, TagFrequencyMap } from "@/types";
import { useState } from "react";
import Tags from "./Tags";
import { useParams } from "next/navigation";
import Feed from "./Feed";

const Search = ({
  publishedPosts,
  tagFrequencyMap,
}: {
  publishedPosts: PostItem[];
  tagFrequencyMap: TagFrequencyMap;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const params = useParams();
  const { slug } = params;

  const filteredBlogPosts = publishedPosts.filter((post) => {
    const tagContent = post.tags ? post.tags.join(" ") : "";
    const searchContent = post.title + post.summary + tagContent;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <div className="mb-5">
        <Input
          placeholder={slug ? `Search in #${slug}` : "Search Articles"}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <Tags tagFrequencyMap={tagFrequencyMap} />
      </div>

      {!filteredBlogPosts.length && (
        <p className="text-gray-500 text-center">No posts found.</p>
      )}

      <Feed postsToShow={filteredBlogPosts} />
    </>
  );
};

export default Search;
