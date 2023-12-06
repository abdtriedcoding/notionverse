import { getAllPosts } from "@/functions/getAllPosts";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { PostItem } from "@/types";

const HomePage = async () => {
  const publishedItems: PostItem[] = await getAllPosts();
  return (
    <>
      <Header />
      <Feed />
      <div>
        <h2>Feed</h2>
        <ul>
          {publishedItems?.map((item: PostItem) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Date: {item.date}</p>
              <p>Type: {item.type}</p>
              <p>Slug: {item.slug}</p>
              <p>Status: {item.status}</p>
              <p>Tags: {item.tags.join(", ")}</p>
              <div>
                <strong>Summary:</strong>
                {item.summary.map((text: string, index: number) => (
                  <span key={index}>{text}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
