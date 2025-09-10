import React from "react";

function Blog() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📖 My Blog Post</h1>
      <p className="text-lg mb-4">
        This is a detailed blog about my project. I explain how I built it, the tools I used, and
        my key learnings.
      </p>

      {/* Image with link */}
      <a href="https://github.com/yourusername/yourproject" target="_blank" rel="noopener noreferrer">
        <img
          src="https://via.placeholder.com/600x300" // replace with your image link
          alt="Project demo"
          className="rounded-lg shadow-lg hover:opacity-90"
        />
      </a>
    </div>
  );
}

export default Blog;
