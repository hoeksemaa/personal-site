'use client';

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 print:py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white print:text-black">Resume</h1>
        <button
          onClick={() => window.print()}
          className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-400 hover:border-zinc-500 hover:text-white print:hidden"
        >
          Print / Save PDF
        </button>
      </div>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white print:text-black">John Doe</h2>
        <p className="mt-1 text-zinc-400 print:text-gray-600">
          Software Developer
        </p>
        <div className="mt-2 text-sm text-zinc-500 print:text-gray-500">
          <p>email@example.com | github.com/johndoe | linkedin.com/in/johndoe</p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="mb-4 border-b border-zinc-800 pb-2 text-lg font-semibold text-white print:border-gray-300 print:text-black">
          Experience
        </h2>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between">
              <h3 className="font-medium text-white print:text-black">Software Developer</h3>
              <span className="text-sm text-zinc-500">2022 - Present</span>
            </div>
            <p className="text-zinc-400 print:text-gray-600">Company Name</p>
            <ul className="mt-2 list-inside list-disc text-sm text-zinc-400 print:text-gray-600">
              <li>Built and maintained web applications using React and Node.js</li>
              <li>Collaborated with cross-functional teams to deliver features</li>
              <li>Improved application performance by 40%</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between">
              <h3 className="font-medium text-white print:text-black">Junior Developer</h3>
              <span className="text-sm text-zinc-500">2020 - 2022</span>
            </div>
            <p className="text-zinc-400 print:text-gray-600">Previous Company</p>
            <ul className="mt-2 list-inside list-disc text-sm text-zinc-400 print:text-gray-600">
              <li>Developed features for customer-facing applications</li>
              <li>Participated in code reviews and agile ceremonies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="mb-4 border-b border-zinc-800 pb-2 text-lg font-semibold text-white print:border-gray-300 print:text-black">
          Education
        </h2>

        <div>
          <div className="flex justify-between">
            <h3 className="font-medium text-white print:text-black">B.S. Computer Science</h3>
            <span className="text-sm text-zinc-500">2016 - 2020</span>
          </div>
          <p className="text-zinc-400 print:text-gray-600">University Name</p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="mb-4 border-b border-zinc-800 pb-2 text-lg font-semibold text-white print:border-gray-300 print:text-black">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {[
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Node.js',
            'Python',
            'PostgreSQL',
            'Git',
            'Docker',
            'AWS',
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300 print:border print:border-gray-300 print:bg-white print:text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
