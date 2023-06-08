import Image from 'next/image';

interface Props {
  urls: SpotifyApi.ImageObject[];
  alt?: string;
  className?: string;
  prefferdSize?: 'small' | 'medium' | 'big';
}

function CoverImage({
  urls,
  alt = '',
  className = '',
  prefferdSize = 'medium',
}: Props) {
  const [big, medium, small] = urls;

  const sizeToPosition = {
    big: [big, 640] as const,
    medium: [medium, 320] as const,
    small: [small, 640] as const,
  };

  const [image, pixelSize] = sizeToPosition[prefferdSize];

  const matchedImage = image || urls[0];

  if (!matchedImage) {
    return <div className="h-32 w-32 bg-blue-600">placeholder image</div>;
  }

  return (
    <figure className={`cover-shadow relative h-64 w-64 ${className}`}>
      <Image
        src={matchedImage.url}
        fill={true}
        alt={alt}
        sizes={`${pixelSize}px`}
        unoptimized
      />
      {/* //unoptimized due to next limit hit */}
    </figure>
  );
}

export default CoverImage;
