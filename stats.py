from git import Repo
from datetime import date, timedelta

def commit_words(repo):
    wordcount = {}
    for commit in repo.iter_commits('master'):
        for word in commit.message.split():
            if word not in wordcount:
                wordcount[word] = 1
            else:
                wordcount[word] += 1
    return wordcount

def commit_lengths(repo):
    lines = 0
    count = 0
    for commit in repo.iter_commits('master'):
        lines += commit.stats.total['lines']
        count += 1
    return lines / float(count)

def contributions_daily(repo):
    per_day = {}
    for commit in repo.iter_commits('master'):
        date = datetime.fromtimestamp(commit.committed_date)
        if date - date.today() < timedelta(days=365):
            print(date)

def set_repo(url):
    return Repo.clone_from(url=url, to_path='/tmp/' + url)

def commit_emotions(repo):
    counts = wordcount(repo)
    pass
