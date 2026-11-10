import Button from '../components/Button';

export default function Home() {
  return (
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Get More RAM Today!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Click the button below to learn more about increasing your computer&#39;s memory
        </p>
        <Button href="/how-it-works">Learn More</Button>
      </section>
  );
}