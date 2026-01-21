export type TVideoPlayer = {
    src: string;
    className?: string
}
export default function VideoPlayer(props: TVideoPlayer) {
    const { src, className } = props;
    return (
        <div className={`${className} relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl`}>
            <iframe
                className="w-full h-full"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share
        "
                allowFullScreen
            />
        </div>
    );
}
