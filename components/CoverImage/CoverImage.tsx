import Image from 'next/image';

interface Props {
  url: string | undefined;
  alt?: string;
  className?: string;
}
function CoverImage({ url, alt = '', className = '' }: Props) {
  if (!url) return null;

  return (
    <figure className={`cover-shadow relative ${className}`}>
      {/* //unoptimized due to next limit hit */}
      <Image src={url} fill={true} alt={alt} unoptimized />
    </figure>
  );
}
export default CoverImage;
