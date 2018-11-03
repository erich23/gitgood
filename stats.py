from git import Repo
from datetime import date, timedelta, datetime
import os

def messages_words_impl(repo):
    wordcount = {}
    for commit in repo.iter_commits('master'):
        for word in commit.message.split():
            if word not in wordcount:
                wordcount[word] = 1
            else:
                wordcount[word] += 1
    return wordcount

def commit_lengths_impl(repo):
    lines = 0
    count = 0
    for commit in repo.iter_commits('master'):
        lines += commit.stats.total['lines']
        count += 1
    return lines / float(count)

def contributions_daily_impl(repo):
    per_day = {}
    for commit in repo.iter_commits('master'):
        dt = datetime.fromtimestamp(commit.committed_date)
        if dt - datetime.today() < timedelta(days=365):
            d = str(dt.date())
            if d not in per_day:
                per_day[d] = 1
            else:
                per_day[d] += 1
    return per_day

def contributions_authors_impl(repo):
    by_committer = {}
    for commit in repo.iter_commits('master'):
        committer = commit.committer.name
        if committer not in by_committer:
            by_committer[committer] = 1
        else:
            by_committer[committer] += 1
    return by_committer

def commit_times_impl(repo):
    commit_times = {}
    for commit in repo.iter_commits('master'):
        time = datetime.fromtimestamp(commit.committed_date).hour
        if time not in commit_times:
            commit_times[time] = 1
        else:
            commit_times[time] += 1
    return commit_times

def set_repo_impl(url):
    to_path = '/tmp/' + url
    if os.path.exists(to_path):
        return Repo(to_path)
    else:
        return Repo.clone_from(url=url, to_path=to_path)

def messages_emotions_impl(repo):
    counts = wordcount(repo)
    pass
