const AboutPage = () => {
  return (
    <div className="py-4 space-y-5">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div style={{ width: "150px", height: "150px" }}>
          <img
            src="https://0.gravatar.com/avatar/6107d5f01cf8ee0e62a512ca53ed489bd464881fa03dc9244dda22e7da921111?size=256"
            alt="Profile"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-xl font-semibold">Abdullah (Software Developer)</h1>
      </div>
      <p>
        👋 I'm a passionate and dedicated software developer, currently
        navigating my way through the 6th semester of B.Tech. My journey in the
        vast realm of software development began in my first semester, and I've
        been on an exciting learning adventure ever since. 🚀 With a solid
        foundation in Data Structures and Algorithms (DSA), I've honed my skills
        to become a proficient problem solver. 🧠 My coding journey has been a
        continuous exploration of new technologies and methodologies. I take
        pride in crafting robust and efficient web applications, utilizing a
        toolkit that includes technologies like React.js, Next.js, Firebase,
        REST APIs, Notion Database, Sanity, MongoDB, Prisma, and many more. 💻
        Each project is a canvas where I blend creativity with functionality,
        whether it's designing intuitive user interfaces or architecting
        scalable backend systems. As a self-driven developer, I embrace
        challenges as opportunities for growth. 🌱 My goal is to contribute
        innovative solutions to real-world problems and make a positive impact
        through my work. Let's connect and dive into the exciting world of
        software development together! 🌐✨
      </p>
    </div>
  );
};

export default AboutPage;
