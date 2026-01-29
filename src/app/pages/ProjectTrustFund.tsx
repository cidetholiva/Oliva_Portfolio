import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/bf4ee631-41bc-48c9-bced-7d5c5ed0b95c_rw_1200.png?h=826194631606971fa860f873d01c06a6';
const secondaryImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/add2f956-01de-45b4-a884-39d0b643613a_rw_1920.png?h=9d4a7c5a8fdba870005e9de7d22e48e5';

export function ProjectTrustFund() {
  const projectData = {
    title: 'TrustFund',
    subtitle: 'Financial Trust & Investment Management Platform',
    tags: ['Fintech', 'Web App', 'UX Research', 'UI Design'],
    heroImage: heroImage,
    secondaryImage: secondaryImage,
    githubUrl: 'https://github.com/cidetholiva/TrustFund',
    devpostUrl: 'https://devpost.com/software/trustfund',
    demoLink: null,
    problem: 'Families often struggle to balance trust, independence, and responsibility when it comes to money. Asking for funds, approving purchases, and setting expectations can easily turn into stress, confusion, or frustration.',
    solution: 'TrustFund is a family finance tool designed to make money conversations easier. Teens can log purchases, submit requests, and track spending, while parents can approve or deny with context. Both sides gain visibility into habits, allowances, and goals.',
    designProcess: [
      {
        title: 'User Research & Market Analysis',
        description: 'We researched real conversations between families who wanted a better way to teach financial responsibility. Parents needed clarity and teens needed independence without constant arguments.'
      },
      {
        title: 'Information Architecture & Data Hierarchy',
        description: 'We used Figma to map the journey for both roles and designed flows where requests, approvals, spending logs, and goals felt simple, clear, and fair. We used React Native with Expo and Expo Router to separate features based on login type. Parents saw approval tools and spending overviews, while teens saw their own goals, requests, and activity. Then, we integrated Capital One\'s API to simulate real account actions like transfers and request approvals, and used MongoDB to track users, requests, and history in a flexible, scalable way.'
      },
      {
        title: 'Visual Design System',
        description: 'TrustFund\'s visual system prioritizes clarity, trust, and transparency to support healthy financial communication between parents and teens. I used green and gold to signal trust, money, and long-term value while the Bank-inspired logo and name reinforces security and family legacy. Clean typography, strong contrast, and card-based layouts reduce cognitive load and make balances, transactions, and pending requests easy to understand at a glance, reinforcing confidence and trust in everyday financial decisions.'
      },
      {
        title: 'Usability Testing & Iteration',
        description: 'We refined layouts, fixed keyboard issues, clarified input flows, and shaped the interface around trust, communication, and simplicity.'
      }
    ],
    outcome: 'We built a working prototype where parents and teens can interact around money in a structured, friendly way. TrustFund supports real financial requests, spending logs, and role-based tools that feel practical instead of overwhelming. Integrating a real banking API brought the project to life, making the experience feel closer to something families could actually use. Looking ahead, we want to connect TrustFund to a real-time database like Firebase or Supabase so users can log in and save their data across sessions and devices. We also plan to add authentication features to support secure login and account management. Additional improvements include push notifications for new requests and approvals, visual analytics to show teens how they\'re spending over time, and customizable goals for parents to encourage financial literacy. Our vision is to make TrustFund a go-to platform for families to manage money conversations with ease and clarity.',
    reflection: 'This project reinforced the importance of balancing aesthetics with functionality in fintech design. The challenge of making complex financial data feel approachable without sacrificing accuracy taught me valuable lessons about progressive disclosure and user empowerment. Moving forward, I\'d explore more personalized learning paths to help users grow their financial literacy within the platform. Furthermore, this project taught me how complex it is to build for two different roles without breaking the user flow. Working with third-party APIs, structuring scalable logic with TypeScript, and handling mobile UX challenges was tough but exciting. Most importantly, I saw how thoughtful design can make financial conversations less stressful and more meaningful.',
    role: 'Lead UX/UI Designer, Frontend',
    tools: 'Figma, TypeScript, JavaScript, Expo',
    duration: 'April 11, 2025 - April 13, 2025 (Bitcamp Hackathon)',
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/ui-ux"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to UI/UX Design</span>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            {projectData.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            {projectData.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {projectData.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-gradient-to-r from-rose-400/20 to-pink-400/20 border border-rose-300/30 dark:border-rose-400/30 text-rose-600 dark:text-rose-300 backdrop-blur-sm text-xs"
              >
                {tag}
              </span>
            ))}
            <a
              href={projectData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all text-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={projectData.devpostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Devpost</span>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl">
          {projectData.demoLink ? (
            <a href={projectData.demoLink} target="_blank" rel="noopener noreferrer" className="block group relative">
              <ImageWithFallback
                src={projectData.heroImage}
                alt={projectData.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-pink-500/0 group-hover:from-rose-500/20 group-hover:to-pink-500/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-white bg-rose-500/90 px-6 py-3 rounded-full">
                  <ExternalLink className="w-5 h-5" />
                  <span>View Demo</span>
                </div>
              </div>
            </a>
          ) : (
            <ImageWithFallback
              src={projectData.heroImage}
              alt={projectData.title}
              className="w-full aspect-video object-cover"
            />
          )}
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-6">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">My Role</h3>
            <p className="text-gray-900 dark:text-white">{projectData.role}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-6">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tools & Tech</h3>
            <p className="text-gray-900 dark:text-white">{projectData.tools}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-6">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Duration</h3>
            <p className="text-gray-900 dark:text-white">{projectData.duration}</p>
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-12">
          {/* Problem */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              The Problem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              The Solution
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.solution}
            </p>
          </div>

          {/* Design Process */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Design Process
            </h2>
            <div className="space-y-6">
              {projectData.designProcess.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Project Image */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl">
            <ImageWithFallback
              src={projectData.secondaryImage}
              alt={`${projectData.title} - Design Details`}
              className="w-full object-contain"
            />
          </div>

          {/* Outcome */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              The Outcome
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.outcome}
            </p>
          </div>

          {/* Reflection */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Reflection
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.reflection}
            </p>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="mt-16 text-center">
          <Link
            to="/ui-ux"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xl shadow-rose-500/40 hover:shadow-rose-500/60 hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
