import Link from "next/link";
// import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();

  const paths = data.map((photo) => {
    return {
      params: { id: photo.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/photos/" + id);
  const data = await res.json();

  return {
    props: { photo: data },
  };
};

const photoDetails = ({ photo }) => {
  const url = photo.url;
  return (
    <div className="max-w-fit align-middle">
      <h1 className="text-[30px] mt-7">Single Photo</h1>
      <h2 className="mt-2">{photo.title}</h2>
      <img src={url} width="200" height="200" alt="" />
      <div>
        <Link href={photo.thumbnailUrl}>{photo.thumbnailUrl}</Link>
      </div>
    </div>
  );
};

export default photoDetails;
