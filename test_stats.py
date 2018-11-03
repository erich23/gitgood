#!/usr/bin/env python3

import stats
from git import Repo

def main():
    repo = stats.set_repo_impl(input('.git URL: '))
    assert not repo.bare
    print(stats.messages_words_impl(repo))
    print(stats.commit_lengths_impl(repo))
    print(stats.contributions_daily_impl(repo))

if __name__ == '__main__':
    main()