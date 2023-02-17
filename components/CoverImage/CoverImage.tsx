import Image from 'next/image';

function CoverImage({ url, alt }: { url: string; alt?: string }) {
  if (!url) return <p>No url provided</p>;

  return (
    <figure className="relative h-full w-full ">
      <Image
        src={url}
        layout={'fill'}
        objectFit={'cover'}
        placeholder={'blur'}
        blurDataURL={'/public/logo.png'}
        alt={alt ?? ''}
      />
    </figure>
  );
}
export default CoverImage;
