import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("https://api.github.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://api.github.com/users/" + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

const UserDetails = ({ user }) => {
  return (
    <div className="max-w-fit align-middle">
      <Head>
        <title>Tutorial on Next.js | {user.name}</title>
      </Head>
      <h1 className="text-[30px] mt-7">Single Photo</h1>

      <h2 className="mt-2">Name: {user.name || "default name"}</h2>
      <Image src={user.avatar_url} width="200" height="200" alt="" />
      <div>
        <h3>Followers:{user.followers}</h3>
        <h3>Following:{user.following}</h3>
      </div>
      <h4>Type:{user.type}</h4>
    </div>
  );
};

export default UserDetails;
