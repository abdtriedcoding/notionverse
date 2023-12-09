import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="max-w-2xl m-auto px-4 min-h-full">
      {/* <!-- Header Section --> */}
      <header className="pb-10">
        <h1 className="text-3xl font-bold">Abdullah</h1>
        <p className="text-lg">Web Developer | Open Source Enthusiast</p>
      </header>

      {/* <!-- About Me Section --> */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700">
          Write a brief description about yourself here. Mention your
          background, skills, and interests.
        </p>
      </div>

      {/* <!-- Repository Idea Section --> */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Repository Idea</h2>
        <ul className="list-disc pl-4">
          <li>Point 1: Describe your first point about the repo idea.</li>
          <li>Point 2: Describe your second point about the repo idea.</li>
          <li>Point 3: Describe your third point about the repo idea.</li>
          {/* <!-- Add more points as needed --> */}
        </ul>
      </div>

      {/* <!-- GitHub Button --> */}
      <div className="mb-8">
        <Link
          href="https://github.com/sidd-abdullah/notionverse"
          target="_blank"
          className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
        >
          Give Repo a ⭐
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
