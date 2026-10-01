'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
        let res = await fetch(`https://raw.githubusercontent.com/${repoPath}/main/README.md`);
        if (!res.ok) {
          res = await fetch(`https://raw.githubusercontent.com/${repoPath}/master/README.md`);
        }
        
        if (!res.ok) {
          setContent('README not found for this repository. Make sure the repository is public and has a README.md.');
          return;
        }

        const text = await res.text();
        setContent(text);
      } catch (error) {
        setContent('Failed to load README.');
      }
    };

    fetchReadme();
  }, [repo]);

  return (
    <div className="prose prose-invert max-w-none font-sans text-sm mt-4 p-4 bg-black/20 rounded-lg border border-white/10 overflow-hidden">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
