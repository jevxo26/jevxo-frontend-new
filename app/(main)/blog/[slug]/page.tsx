"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { useParams } from "next/navigation";
import { blogApi, Blog } from "../../../../api/blogApi";

export default function BlogDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      try {
        // Attempt to fetch by ID first, or fetch all and find by slug if it fails
        // In a real app, the backend should ideally support GET /blog/slug/:slug
        try {
          const data = await blogApi.getBlogById(slug);
          if (data) {
            setBlog(data);
            return;
          }
        } catch (e) {
          // If fetching by ID fails, fallback to fetching all and finding the slug
          console.warn("Fetch by ID failed, falling back to finding by slug...");
        }

        const allBlogs = await blogApi.getAllBlogs();
        const foundBlog = allBlogs.data?.find((b: Blog) => b.slug === slug || b.id === slug) ||
          allBlogs.find?.((b: Blog) => b.slug === slug || b.id === slug);

        if (foundBlog) {
          setBlog(foundBlog);
        }
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-[#F8F9FA] flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="w-full min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to all articles
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="w-full bg-[#F8F9FA] min-h-screen pb-24">
      {/* Hero Section */}
      <section className="w-full pt-28 pb-16 px-6 relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors bg-gray-50 px-4 py-2 rounded-full border border-gray-100 shadow-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Articles</span>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed">
              {blog.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <User className="w-4 h-4" />
              </div>
              <span>{blog.author || "Admin"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-20">
        {blog.coverImage ? (
          <div className="w-full aspect-[21/9] md:aspect-[2.5/1] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 mb-12">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-12"></div>
        )}

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-lg prose-blue max-w-none w-full break-words overflow-hidden">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} className="w-full max-w-full overflow-x-auto" />
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-gray-200">
          <p className="text-gray-500 font-medium">Thanks for reading!</p>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: blog.title,
                  url: window.location.href,
                });
              }
            }}
            className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full font-medium transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Share Article
          </button>
        </div>
      </section>
    </main>
  );
}
