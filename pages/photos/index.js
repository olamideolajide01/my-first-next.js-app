import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";

export const getStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=6"
  );
  const data = await response.json();

  console.log(data);

  return {
    props: { photos: data },
  };
};

const Post = ({ photos }) => {
  return (
    <div>
      <Head>
        <title>Tutorial on Next.js | All Photos</title>
      </Head>
      <h1 className="mt-5 text-[30px] font-bold  px-7">All Photos</h1>
      <div className="grid lg:grid-cols-3 lg:gap-9 gap-6  md:grid-cols-2 grid-cols-1 px-7">
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              className="mt-10"
              src={photo.url}
              height="200"
              width="200"
              alt=""
            />
            <Link href={"/photos/" + photo.id} key={photo.id}>
              <h3 className="bg-slate-200 py-3 my-2 cursor-pointer inline-block">
                {photo.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
