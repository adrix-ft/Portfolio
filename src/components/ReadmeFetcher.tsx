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
        
        // Helper to convert relative github path to raw github URL
        const makeRawUrl = (url: string) => {
          const trimmed = url.trim();
          if (
            trimmed.startsWith('http://') ||
            trimmed.startsWith('https://') ||
            trimmed.startsWith('data:') ||
            trimmed.startsWith('#') ||
            trimmed.startsWith('mailto:')
          ) {
            return trimmed;
          }
          const cleanPath = trimmed.startsWith('./')
            ? trimmed.slice(2)
            : trimmed.startsWith('/')
            ? trimmed.slice(1)
            : trimmed;
          return `https://raw.githubusercontent.com/${repoPath}/${branch}/${cleanPath}`;
        };

        // Fix relative image paths in HTML srcset="..." or srcset='...' (e.g. <source> inside <picture>)
        text = text.replace(/\bsrcset=(["'])([^"']+)\1/gi, (match, quote, p1) => {
          const updatedSrcset = p1
            .split(',')
            .map((item: string) => {
              const parts = item.trim().split(/\s+/);
              if (parts[0]) {
                parts[0] = makeRawUrl(parts[0]);
              }
              return parts.join(' ');
            })
            .join(', ');
          return `srcset=${quote}${updatedSrcset}${quote}`;
        });

        // Fix relative image paths in HTML src="..." or src='...'
        text = text.replace(/\bsrc=(["'])([^"']+)\1/gi, (match, quote, p1) => {
          return `src=${quote}${makeRawUrl(p1)}${quote}`;
        });

        // Fix relative image paths in Markdown ![alt](...)
        text = text.replace(/\]\(([^)]+)\)/g, (match, p1) => {
          return `](${makeRawUrl(p1)})`;
        });

        setContent(text);
      } catch (error) {
        setContent('Failed to load README.');
      }
    };

    fetchReadme();
  }, [repo]);

  return (
    <div className="prose prose-sm md:prose-base prose-invert w-full max-w-none font-sans mt-4 p-3 md:p-8 bg-zinc-900 rounded-xl border border-white/10 shadow-inner overflow-x-auto break-words [&_img]:max-w-full [&_img]:!inline-block [&_a]:!inline-block [&_a]:break-words [&_img]:!m-1 [&_img]:rounded-md [&_pre]:max-w-full [&_pre]:overflow-x-auto prose-h1:text-xl md:prose-h1:text-3xl prose-h2:text-lg md:prose-h2:text-2xl">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
