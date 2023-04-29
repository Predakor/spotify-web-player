import Image from 'next/image';

interface Props {
  url: string | undefined;
  alt?: string;
  className?: string;
}
//unoptimized bcs limit hit
function CoverImage({ url, alt = '', className = '' }: Props) {
  if (!url) return <p>No url provided</p>;

  return (
    <figure className={`cover-shadow relative w-full ${className}`}>
      <Image
        src={url}
        layout={'fill'}
        objectFit={'cover'}
        alt={alt}
        unoptimized
      />
    </figure>
  );
}
export default CoverImage;
