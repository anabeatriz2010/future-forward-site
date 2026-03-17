// Componente para exibir vídeo de um slide
interface SlideVideoProps {
  src: string;
  title: string;
}

const SlideVideo = ({ src, title }: SlideVideoProps) => {
  return (
    <div className="rounded-lg overflow-hidden border border-secondary/30 glow-purple">
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        className="w-full aspect-video bg-background"
        title={title}
      >
        Seu navegador não suporta vídeo.
      </video>
    </div>
  );
};

export default SlideVideo;
