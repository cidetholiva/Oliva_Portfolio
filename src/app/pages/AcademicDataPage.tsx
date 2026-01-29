import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

export function AcademicDataPage() {
  const projects = [
    {
      courseName: 'BUDT 702 – Database Management Systems',
      overview: 'This course focused on the full lifecycle of database system development, from requirements gathering to implementation. Working in teams, we translated real-world business scenarios into functioning database solutions, learning how to balance technical constraints with organizational needs.',
      concepts: 'Entity-relationship modeling and normalization principles, relational schema design and referential integrity, business rules translation into database constraints, SQL DDL and DML operations (CREATE, INSERT, SELECT, UPDATE, DELETE), frontend-backend integration for information systems, and collaborative system documentation practices.',
      tools: 'SQL, Lucidchart (ER diagrams), Microsoft Word & PowerPoint (system documentation)',
      skills: 'I developed the ability to analyze complex business requirements and translate them into structured database designs. I learned to apply normalization techniques to reduce redundancy while maintaining data integrity. Through team-based projects, I gained experience designing end-to-end systems and communicating technical decisions to diverse audiences. This course taught me to think critically about data architecture and how database design impacts system scalability and performance.',
    },
    {
      courseName: 'BUDT 731 – Data Models & Decisions (R)',
      overview: 'This course emphasized making informed business decisions through data analysis and statistical modeling. I learned to move from raw datasets to actionable insights by applying quantitative methods, creating visualizations, and interpreting results in a business context.',
      concepts: 'Data-driven decision-making frameworks, statistical analysis and regression modeling, data visualization principles for insight communication, pattern recognition and relationship identification in datasets, and translating analytical findings into strategic recommendations.',
      tools: 'R (data analysis and modeling), Excel (data manipulation), Tableau (visualization and dashboards)',
      skills: 'I built a strong foundation in using R for statistical analysis, including data cleaning, transformation, and modeling. I learned how to choose appropriate analytical techniques based on the problem type and data characteristics. Through hands-on projects, I developed the ability to create compelling visualizations that tell a clear story and guide decision-making. This course strengthened my skills in interpreting statistical outputs and communicating technical findings to non-technical stakeholders in a way that drives action.',
    },
    {
      courseName: 'INST 327 – Database Design & Modeling',
      overview: 'This course deepened my understanding of relational database theory and practical implementation. I learned to design databases that not only function correctly but also consider the broader social and ethical implications of how data is structured and accessed.',
      concepts: 'Relational database theory and normalization techniques, requirements analysis and user-centered database design, entity-relationship modeling and schema development, SQL querying and database implementation strategies, data quality, ethics, and equity considerations in database design, and individual and team-based database development workflows.',
      tools: 'SQL, Relational Database Management Systems (RDBMS)',
      skills: 'I gained hands-on experience building and querying working databases from scratch, applying both individual and collaborative approaches. I learned to conduct requirements analysis with a user-oriented mindset, ensuring that database designs align with real user needs. This course taught me to think critically about the ethical dimensions of data design—how choices in schema structure, access control, and data collection can impact fairness and equity. I developed stronger SQL querying skills and learned to evaluate tradeoffs between theoretical best practices and practical constraints.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/data-analytics"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Data Analytics</span>
        </Link>

        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Academic Coursework & Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building foundational skills in statistics, machine learning, and data infrastructure
          </p>
        </div>

        {/* Carousel Section */}
        <div className="max-w-4xl mx-auto">
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-rose-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-rose-400 dark:hover:bg-rose-400'
                }`}
              />
            ))}
          </div>

          {/* Project Details */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8 space-y-6 relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/40 dark:border-white/20 hover:bg-white/60 dark:hover:bg-black/60 transition-all flex items-center justify-center text-gray-900 dark:text-white z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/40 dark:border-white/20 hover:bg-white/60 dark:hover:bg-black/60 transition-all flex items-center justify-center text-gray-900 dark:text-white z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {projects[currentIndex].courseName}
              </h3>
              <div className="flex items-center gap-2 text-sm text-rose-500 dark:text-rose-400">
                <span>{currentIndex + 1} / {projects.length}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Overview</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {projects[currentIndex].overview}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Key Concepts</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {projects[currentIndex].concepts}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Tools & Technologies</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {projects[currentIndex].tools}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Key Skills Developed</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {projects[currentIndex].skills}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}