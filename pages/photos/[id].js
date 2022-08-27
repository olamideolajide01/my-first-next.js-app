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

const photoDetails = ({ user }) => {
  return (
    <div className="max-w-fit align-middle">
      <h1 className="text-[30px] mt-7">Single Photo</h1>
      <h2 className="mt-2">Name: {user.name.toUpperCase()}</h2>
      <Image src={user.avatar_url} width="200" height="200" alt="" />
      <div>
        <Link href={user.url}>{user.url}</Link>
      </div>
    </div>
  );
};

export default photoDetails;
