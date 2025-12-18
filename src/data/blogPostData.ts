export const getBlogPostById = (id: number) => {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&h=800&fit=crop",
      category: "Web Development",
      title: "Building Scalable React Applications in 2024",
      excerpt:
        "Learn the best practices and patterns for creating maintainable and scalable React applications with modern tools and techniques.",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      author: {
        name: "Your Name",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        bio: "Full-stack developer and tech blogger with 5+ years of experience.",
      },
      content: {
        sections: [
          {
            id: "introduction",
            heading: "Introduction",
            paragraphs: [
              "Building scalable React applications requires a deep understanding of both the framework and software architecture principles. In this comprehensive guide, we'll explore the essential patterns and practices that will help you create applications that can grow with your business needs.",
              "Whether you're working on a small startup project or an enterprise-level application, the principles we'll discuss here will serve as a solid foundation for your React development journey. We'll cover everything from `component architecture` to `state management` and `performance optimization`.",
            ],
          },
          {
            id: "component-architecture",
            heading: "Component Architecture Best Practices",
            paragraphs: [
              "One of the most critical aspects of building scalable React applications is establishing a solid component architecture. The key is to create small, reusable components that follow the `Single Responsibility Principle`. Each component should do one thing and do it well.",
              "Consider using a `container/presentational` pattern where you separate your business logic from your UI components. Container components handle data fetching and state management, while presentational components focus solely on rendering the UI based on the props they receive.",
            ],
            codeBlock: {
              language: "typescript",
              code: `// Presentational Component
interface UserCardProps {
  name: string;
  email: string;
  avatar: string;
}

export function UserCard({ name, email, avatar }: UserCardProps) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

// Container Component
export function UserCardContainer({ userId }: { userId: string }) {
  const { data, isLoading } = useUser(userId);
  
  if (isLoading) return <Spinner />;
  if (!data) return <ErrorState />;
  
  return <UserCard {...data} />;
}`,
            },
          },
          {
            id: "state-management",
            heading: "Modern State Management Strategies",
            paragraphs: [
              "State management is often one of the most challenging aspects of building React applications. While `Redux` was the go-to solution for years, modern React provides several alternatives that might be more suitable for your use case.",
              "Consider using React's built-in `Context API` combined with `useReducer` for simpler applications, or explore solutions like `Zustand` or `Jotai` for a more lightweight approach. For server state, tools like `React Query` or `SWR` can significantly simplify your data fetching logic.",
            ],
            codeBlock: {
              language: "typescript",
              code: `// Using Zustand for simple state management
import create from 'zustand';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

// Using in a component
function Profile() {
  const { user, logout } = useUserStore();
  
  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}`,
            },
          },
          {
            id: "performance-optimization",
            heading: "Performance Optimization Techniques",
            paragraphs: [
              "Performance is crucial for user experience. Start by using React's built-in optimization tools like `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary re-renders. However, remember that premature optimization can lead to more complex code without significant benefits.",
              "Implement code splitting using `React.lazy` and `Suspense` to reduce your initial bundle size. This is especially important for large applications where loading everything upfront can significantly impact your Time to Interactive (TTI) metrics.",
              "Monitor your application's performance using Chrome DevTools and React DevTools Profiler. Identify bottlenecks and optimize them systematically. Remember: measure first, then optimize based on real data, not assumptions.",
            ],
            codeBlock: {
              language: "typescript",
              code: `// Code splitting example
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}`,
            },
          },
          {
            id: "testing-strategies",
            heading: "Comprehensive Testing Strategies",
            paragraphs: [
              "A scalable application needs a solid testing strategy. Implement a testing pyramid: lots of unit tests, some integration tests, and a few end-to-end tests. Use `Jest` and `React Testing Library` for unit and integration tests, and tools like `Playwright` or `Cypress` for E2E testing.",
              "Focus on testing user behavior rather than implementation details. Your tests should verify that your application works correctly from the user's perspective, not that it uses specific internal methods or state structures.",
            ],
          },
        ],
      },
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
      category: "Tutorial",
      title: "Mastering TypeScript: Advanced Types and Patterns",
      excerpt:
        "Dive deep into TypeScript's advanced type system and learn how to leverage it for better code quality and developer experience.",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      author: {
        name: "Your Name",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        bio: "Full-stack developer and tech blogger with 5+ years of experience.",
      },
      content: {
        sections: [
          {
            id: "introduction",
            heading: "Why Advanced TypeScript Matters",
            paragraphs: [
              "TypeScript has become an essential tool in modern web development, but many developers only scratch the surface of its capabilities. Understanding advanced TypeScript patterns can dramatically improve your code quality, catch bugs before they reach production, and enhance your development experience.",
              "In this guide, we'll explore powerful TypeScript features like `conditional types`, `mapped types`, and `template literal types` that will take your type safety to the next level.",
            ],
          },
          {
            id: "utility-types",
            heading: "Leveraging Utility Types",
            paragraphs: [
              "TypeScript provides several built-in utility types that can save you time and make your code more maintainable. Types like `Partial<T>`, `Required<T>`, `Pick<T, K>`, and `Omit<T, K>` allow you to transform existing types in powerful ways.",
            ],
            codeBlock: {
              language: "typescript",
              code: `interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Pick specific properties
type UserPreview = Pick<User, 'id' | 'name'>;

// Omit specific properties
type UserWithoutAge = Omit<User, 'age'>;

// Make all properties required
type RequiredUser = Required<Partial<User>>;`,
            },
          },
        ],
      },
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
      category: "Career",
      title: "From Junior to Senior Developer: My Journey",
      excerpt:
        "Reflections on my growth as a software developer and the key lessons learned along the way to becoming a senior developer.",
      date: "Nov 28, 2024",
      readTime: "6 min read",
      author: {
        name: "Your Name",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        bio: "Full-stack developer and tech blogger with 5+ years of experience.",
      },
      content: {
        sections: [
          {
            id: "introduction",
            heading: "The Beginning of My Journey",
            paragraphs: [
              "Five years ago, I started my career as a junior developer, filled with excitement and, honestly, a bit of imposter syndrome. Looking back now, I can see how much I've grown, not just in technical skills, but in understanding what it truly means to be a senior developer.",
              "This isn't just about writing better code or knowing more frameworks. It's about `mentorship`, `architectural decisions`, and `strategic thinking` that goes beyond the keyboard.",
            ],
          },
          {
            id: "technical-growth",
            heading: "Technical Skills Are Just the Beginning",
            paragraphs: [
              "As a junior developer, I was obsessed with learning every new technology and framework. I wanted to be the person who knew it all. But I quickly learned that being a senior developer isn't about knowing everything—it's about knowing how to learn and when to apply the right tool for the job.",
              "Focus on mastering fundamentals: `data structures`, `algorithms`, `design patterns`, and `system design`. These skills are transferable across languages and frameworks, making you a more versatile and valuable developer.",
            ],
          },
          {
            id: "soft-skills",
            heading: "The Importance of Soft Skills",
            paragraphs: [
              "The biggest surprise in my journey was discovering how crucial soft skills are for career advancement. Communication, collaboration, and empathy became just as important as my coding abilities.",
              "Learn to write clear documentation, give constructive code reviews, and communicate technical concepts to non-technical stakeholders. These skills will set you apart and open doors to leadership opportunities.",
            ],
          },
        ],
      },
    },
  ];

  return posts.find((post) => post.id === id) || null;
};
