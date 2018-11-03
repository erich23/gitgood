#!/usr/bin/env python3

import stats
from git import Repo

def main():
    repo = stats.set_repo(input('.git URL: '))
    assert not repo.bare
    print(len(stats.commit_words(repo)))
    print(stats.commit_lengths(repo))
    stats.contributions_daily(repo)

if __name__ == '__main__':
    main()