type BannerProps = {
  image: string;
};

export default function Banner({ image }: BannerProps) {
  return (
    <div className="w-full h-[400px] max-sm:h-auto">
      <img
        src={image}
        alt="Banner vai aqui"
        className=" bg-cover w-full h-full"
      />
    </div>
  );
}
