import { Heart } from 'lucide-react';

interface FirstScreenProps {
  onYes: () => void;
  onNo: () => void;
}

export function FirstScreen({ onYes, onNo }: FirstScreenProps) {
  return (
    <div className="relative">
      {/* Floating decorative Yes/No elements */}
      <div className="floating-yes absolute -top-8 -left-8 text-primary/20 text-6xl font-bold pointer-events-none select-none z-0">
        Yes
      </div>
      <div className="floating-no absolute -top-12 -right-12 text-secondary/20 text-5xl font-bold pointer-events-none select-none z-0 animation-delay-1000">
        No
      </div>
      <div className="floating-yes absolute -bottom-16 right-8 text-primary/15 text-7xl font-bold pointer-events-none select-none z-0 animation-delay-2000">
        Yes
      </div>
      <div className="floating-no absolute bottom-4 -left-16 text-secondary/15 text-6xl font-bold pointer-events-none select-none z-0 animation-delay-1500">
        No
      </div>

      <div className="relative z-10 rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-primary/20 p-8 md:p-12 shadow-2xl">
        <div className="mb-8 flex justify-center">
          <Heart className="h-16 w-16 fill-primary text-primary animate-pulse" />
        </div>
        <h1 className="mb-12 text-center text-3xl md:text-4xl font-bold leading-relaxed text-foreground">
          I'm willing to wait for you, but would I still win if I wait?
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onYes}
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/90 relative z-20"
          >
            Yes
          </button>
          <button
            onClick={onNo}
            className="px-10 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-secondary/80 relative z-20"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

interface NoScreenProps {
  note: string;
  savedNote: string;
  onNoteChange: (value: string) => void;
  onSaveNote: () => void;
}

export function NoScreen({
  note,
  savedNote,
  onNoteChange,
  onSaveNote,
}: NoScreenProps) {
  return (
    <div>
      <div className="rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-primary/20 p-8 md:p-12 shadow-2xl">
        <h1 className="mb-8 text-center text-3xl md:text-4xl font-bold leading-relaxed text-foreground">
          why? you should've said it earlier
        </h1>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="note"
              className="block mb-3 text-sm font-medium text-muted-foreground"
            >
              Share your thoughts...
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => onNoteChange(e.target.value)}
              placeholder="Type your message here..."
              className="w-full min-h-[200px] rounded-2xl bg-background/50 border-2 border-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-all"
            />
          </div>
          <button
            onClick={onSaveNote}
            className="w-full px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/90"
          >
            Save Note
          </button>
          {savedNote && (
            <div className="mt-6 p-6 rounded-2xl bg-accent/30 border border-accent">
              <p className="text-sm font-medium text-accent-foreground mb-2">
                Your saved note:
              </p>
              <p className="text-foreground whitespace-pre-wrap">{savedNote}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface YesStep1Props {
  onNext: () => void;
}

export function YesStep1({ onNext }: YesStep1Props) {
  return (
    <div>
      <div className="rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-primary/20 p-8 md:p-12 shadow-2xl">
        <div className="mb-6 flex justify-center">
          <Heart className="h-12 w-12 fill-primary text-primary" />
        </div>
        <p className="mb-10 text-center text-xl md:text-2xl leading-relaxed text-foreground">
          oh wait really? i didn't expect you to really choose yes. i just wanna
          say sorry for being jealous all the time, i just don't want you to
          fall in love on someone else, 'cause i know that I can't compete with
          anyone especially if you're already falling inlove with him.
        </p>
        <div className="flex justify-center">
          <button
            onClick={onNext}
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/90"
          >
            move to another page
          </button>
        </div>
      </div>
    </div>
  );
}

interface YesStep2Props {
  onNext: () => void;
}

export function YesStep2({ onNext }: YesStep2Props) {
  return (
    <div>
      <div className="rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-primary/20 p-8 md:p-12 shadow-2xl">
        <div className="mb-6 flex justify-center">
          <Heart className="h-12 w-12 fill-primary text-primary" />
        </div>
        <p className="mb-10 text-center text-xl md:text-2xl leading-relaxed text-foreground">
          i hope it doesn't feel you uncomfortable, you can open up on me if i
          ever made you uncomfortable.
        </p>
        <div className="flex justify-center">
          <button
            onClick={onNext}
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/90"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export function YesFinal() {
  return (
    <div>
      <div className="rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-primary/20 p-8 md:p-12 shadow-2xl">
        <div className="mb-6 flex justify-center">
          <Heart className="h-16 w-16 fill-primary text-primary animate-pulse" />
        </div>
        <p className="text-center text-xl md:text-2xl leading-relaxed text-foreground">
          im willing to change myself and myself better so that i can just prove
          it to you that i'm really really willing to wait for you.
        </p>
      </div>
    </div>
  );
}
