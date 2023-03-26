import { fetchPosts } from "./api/data";
import { useState } from "react";

import Header from "../../components/Header/Header";
import Tags from "../../components/Tags/Tags";
import Posts from "../../components/Posts/Posts";
import Head from "../../components/Head";

export default function Home({ postData, tagsData }) {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const [tags, setTags] = useState(tagsData);
  const [tag, setTag] = useState(undefined);

  const [posts, setPosts] = useState(postData);

  const onLoadMore = async () => {
    setLoading(true);
    setPage((prevPage) => prevPage + 1);

    const nextPostsData = await fetchPosts(page + 1);
    const nextPosts = nextPostsData.data;

    const ts = [...tags];
    nextPosts.map((p) => {
      p.tags.map((t) => {
        if (!ts.includes(t)) {
          ts.push(t);
        }
      });
    });

    //Set active tagto undefined
    setTag(undefined);

    //Add new tags to the tag list
    setTags(ts);

    //Append the new posts to the posts array
    setPosts((prevPosts) => [...prevPosts, ...nextPosts]);

    //Reset loading state
    setLoading(false);
  };

  return (
    <>
      <Head />
      <Header />
      <main className="p-4 md:px-12 max-w-[1400px] mx-auto">
        <Tags
          tags={tags}
          activeTag={tag}
          onTagClick={(t) => {
            setTag(t);
          }}
        />
        <Posts activeTag={tag} posts={posts} />
        <button
          onClick={onLoadMore}
          className="mx-auto block my-8 bg-black text-lg text-white px-8 py-4 rounded-full"
        >
          {loading ? "Loading.." : "Load more"}
        </button>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const postsData = await fetchPosts(0);

  //Extract the tags of the posts
  //Also add a random number to the posts for later use
  const tagsData = [];
  postsData.data.map((post) => {
    //We need to do this on the server-side to avoid hydration errors.
    post.randomNumber = (Math.random() * 10).toFixed(2);

    //Time left
    const randomMinutes = Math.floor(Math.random() * 59) + 1;
    const randomSeconds = Math.floor(Math.random() * 59) + 1;

    post.timeLeft = randomMinutes + "m " + randomSeconds + " s";

    post.tags.map((t) => {
      if (!tagsData.includes(t)) {
        tagsData.push(t);
      }
    });
  });

  return {
    props: { postData: postsData.data, tagsData: tagsData }, // will be passed to the page component as props
  };
}
