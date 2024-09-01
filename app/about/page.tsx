import Link from "next/link";

function AboutPage() {
  return (
    <div className="py-5">
      <h1 className="text-center mb-5 title">
        Maswi and team will elaborate further about themselves here! Stay tuned!
      </h1>
      <Link href="https://demo.maswimr.website/" target="_blank">
        <article className="text-center article">
          For now, you can just view their other applications!
        </article>
      </Link>
    </div>
  );
}

export default AboutPage;
