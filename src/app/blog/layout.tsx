import "@/core/styles/blog.css";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="blog-container">{children}</div>;
}
