import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-8 px-2 max-w-sm text-center">
        <div className="relative rounded-full p-2 font-medium text-md leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-center">
          Explore and contribute to{" "}
          <Link
            target="_blank"
            href="https://github.com/sidd-abdullah/notionverse"
            className="font-semibold text-purple-600"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            Notionverse on GitHub <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className="text-center">
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
          Welcome to Notionverse
          <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-purple-500 via-pink-600 to-rose-500 bg-clip-text text-transparent text-center">
            {" "}
            - A Blog built on top of Notion and NextJS 14
          </span>
        </h1>
        <p className="mt-7 text-lg sm:text-xl">
          Notionverse is a blog built on top of Notion and NextJS 14. It's
          seamlessly deployed on Vercel, offering an innovative way to publish
          and share your content using notion as a CMS. Join us in the
          exploration of ideas and contributions to the Notionverse community.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
