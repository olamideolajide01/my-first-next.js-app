import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export const getServerSideProps = async () => {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();

  return {
    props: { photos: data },
  };
};

const Post = ({ photos }) => {
  return (
    <div>
      <Head>
        <title>Tutorial on Next.js | All Users</title>
      </Head>
      <h1 className="mt-5 text-[30px] font-bold  px-7">All Users</h1>
      <div className="grid lg:grid-cols-3 lg:gap-9 gap-6  md:grid-cols-2 grid-cols-1 px-7">
        {photos.map((user) => (
          <div key={user.id}>
            <Link href={"/photos/" + user.id} key={user.id}>
              <Image
                className="mt-10 cursor-pointer"
                src={user.avatar_url}
                height="200"
                width="200"
                alt=""
              />
            </Link>
            <div>
              <Link href={"/photos/" + user.id} key={user.id}>
                <h3 className="bg-slate-200 py-3 cursor-pointer my-2  inline-block">
                  {user.login}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
