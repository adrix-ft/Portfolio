'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import rehypeRaw from 'rehype-raw';

export default function ReadmeFetcher({ repo }: { repo: string }) {
  const [content, setContent] = useState<string>('Loading README...');

  useEffect(() => {
    if (!repo) {
      setContent('No GitHub repository provided.');
      return;
    }

    // Extract user/repo from github link if full URL was provided
    let repoPath = repo;
    if (repo.includes('github.com/')) {
      repoPath = repo.split('github.com/')[1];
    }
    
    // Some repos use 'main', others use 'master'
    const fetchReadme = async () => {
      try {
        let branch = 'main';
        let res = await fetch(`https://raw.githubusercontent.com/${repoPath}/main/README.md`);
        
        if (!res.ok) {
          res = await fetch(`https://raw.githubusercontent.com/${repoPath}/master/README.md`);
          branch = 'master';
        }
        
        if (!res.ok) {
          setContent('README not found for this repository. Make sure the repository is public and has a README.md.');
          return;
        }

        let text = await res.text();
        
        // Fix relative image paths in HTML <img src="...">
        text = text.replace(/src="([^"]+)"/g, (match, p1) => {
          if (p1.startsWith('http') || p1.startsWith('data:')) return match;
          const cleanPath = p1.startsWith('./') ? p1.slice(2) : p1.startsWith('/') ? p1.slice(1) : p1;
          return `src="https://raw.githubusercontent.com/${repoPath}/${branch}/${cleanPath}"`;
        });
        
        // Fix relative image paths in Markdown ![alt](...)
        text = text.replace(/\]\(([^)]+)\)/g, (match, p1) => {
          if (p1.startsWith('http') || p1.startsWith('data:')) return match;
          const cleanPath = p1.startsWith('./') ? p1.slice(2) : p1.startsWith('/') ? p1.slice(1) : p1;
          return `](https://raw.githubusercontent.com/${repoPath}/${branch}/${cleanPath})`;
        });

        setContent(text);
      } catch (error) {
        setContent('Failed to load README.');
      }
    };

    fetchReadme();
  }, [repo]);

  return (
    <div className="prose prose-invert max-w-none font-sans text-sm mt-4 p-4 md:p-8 bg-zinc-900 rounded-xl border border-white/10 shadow-inner overflow-hidden [&_img]:max-w-full [&_img]:rounded-md">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
