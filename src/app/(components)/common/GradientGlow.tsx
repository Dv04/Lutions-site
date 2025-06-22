export default function GradientGlow() {
  return (
    <div
      className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] hero-gradient-bg sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      />
    </div>
  );
}
