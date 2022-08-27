import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const response = await fetch("https://api.github.com/users?_limit=6");
  const data = await response.json();

  return {
    props: { users: data },
  };
};

const Post = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Tutorial on Next.js | All Photos</title>
      </Head>
      <h1 className="mt-5 text-[30px] font-bold  px-7">All Photos</h1>
      <div className="grid lg:grid-cols-3 lg:gap-9 gap-6  md:grid-cols-2 grid-cols-1 px-7">
        {users.map((user) => (
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
            <h3 className="bg-slate-200 py-3 my-2  inline-block">
              {user.login}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
