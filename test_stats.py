#!/usr/bin/env python3

import stats
from git import Repo

def main():
    repo = stats.set_repo_impl(input('.git URL: '))
    assert not repo.bare
    print('commit message word frequency:')
    print(stats.messages_words_impl(repo))
    print('commit loc:')
    print(stats.commit_lengths_impl(repo))
    print('contributions per day:')
    print(stats.contributions_daily_impl(repo))
    print('contributions per author')
    print(stats.contributions_authors_impl(repo))
    print('commits per hour of the day')
    print(stats.commit_times_impl(repo))
    print('commit emotions:')
    print(stats.messages_emotions_impl(repo))

if __name__ == '__main__':
    main()