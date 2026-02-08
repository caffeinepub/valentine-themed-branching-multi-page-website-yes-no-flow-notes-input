import { type ReactNode } from 'react';
import { Heart } from 'lucide-react';

interface ValentineLayoutProps {
  children: ReactNode;
}

export default function ValentineLayout({ children }: ValentineLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)',
        }}
      />

      {/* Gradient overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-background via-background/95 to-accent/20" />

      {/* Decorative hearts */}
      <div className="fixed top-8 right-8 z-0 opacity-20">
        <img
          src="/assets/generated/heart-sticker.dim_256x256.png"
          alt=""
          className="w-24 h-24 animate-pulse"
        />
      </div>
      <div className="fixed bottom-12 left-12 z-0 opacity-15">
        <img
          src="/assets/generated/heart-sticker.dim_256x256.png"
          alt=""
          className="w-32 h-32 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-2xl">{children}</div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 pb-6 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-2">
          © 2026. Built with{' '}
          <Heart className="inline h-4 w-4 fill-primary text-primary" /> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
