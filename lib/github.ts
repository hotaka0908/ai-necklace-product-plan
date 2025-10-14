// GitHub APIを使ってリポジトリ情報を取得

const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'hotaka0908';
const REPO_NAME = 'ai-necklace-product-plan';

export interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  default_branch: string;
  updated_at: string;
}

export interface GitHubIssue {
  number: number;
  title: string;
  state: string;
  created_at: string;
  html_url: string;
  user: {
    login: string;
    avatar_url: string;
  };
  labels: Array<{
    name: string;
    color: string;
  }>;
}

export interface GitHubPullRequest {
  number: number;
  title: string;
  state: string;
  created_at: string;
  html_url: string;
  user: {
    login: string;
    avatar_url: string;
  };
}

export interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

// リポジトリ情報を取得
export async function getRepoInfo(): Promise<GitHubRepo | null> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // 1時間キャッシュ
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch repo info:', response.statusText);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching repo info:', error);
    return null;
  }
}

// オープンなIssueを取得
export async function getOpenIssues(limit = 10): Promise<GitHubIssue[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/issues?state=open&per_page=${limit}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 300 }, // 5分キャッシュ
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch issues:', response.statusText);
      return [];
    }

    const issues = await response.json();
    // Pull Requestsを除外 (GitHubのAPIではPRもissuesに含まれる)
    return issues.filter((issue: GitHubIssue & { pull_request?: unknown }) => !issue.pull_request);
  } catch (error) {
    console.error('Error fetching issues:', error);
    return [];
  }
}

// オープンなPull Requestsを取得
export async function getOpenPullRequests(limit = 10): Promise<GitHubPullRequest[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=${limit}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 300 }, // 5分キャッシュ
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch pull requests:', response.statusText);
      return [];
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching pull requests:', error);
    return [];
  }
}

// 最新のコミットを取得
export async function getRecentCommits(limit = 5): Promise<GitHubCommit[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/commits?per_page=${limit}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 300 }, // 5分キャッシュ
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch commits:', response.statusText);
      return [];
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching commits:', error);
    return [];
  }
}

// 日付をフォーマット
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// 相対時間を表示
export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds}秒前`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}分前`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}時間前`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays}日前`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths}ヶ月前`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}年前`;
}
