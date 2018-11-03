import os
from flask import Flask
from flask import request
from flask import jsonify
from git import Repo

import returncodes as status
import stats as stats

def create_app(test_config=None):

    app = init(test_config)
    
    @app.route('/')
    def home():
        return "This is a server. Why are you here?"

    @app.route('/set-repo')
    def set_repo():
        repo_url = request.args.get('url')
        if repo_url is None:
            return jsonify(status=status.bad_request, message="URL not requested", payload=[])
        
        repo = set_repo_impl(repo_url)
        if repo.bare:
            return jsonify(status=status.clone_failed, message="Clone Failed", payload=[])

        return jsonify(status=status.clone_success, message='OK', payload=[])

    @app.route('/delete-repo')
    def delete_repo():
        repo = request.args.get('url')
        delete_repo_impl(set_repo_impl(repo))
        return jsonify(status=status.request_success, message='OK', payload=[])

    @app.route('/contributions/daily')
    def contributions_daily():
        repo = request.args.get('url')
        return jsonify(status=status.request_success, message='OK', payload=stats.contributions_daily_impl(set_repo_impl(repo)))

    @app.route('/contributions/authors')
    def contributions_authors():
        repo = request.args.get('url')
        return jsonify(status=status.request_success, message='OK', payload=stats.contributions_authors_impl(set_repo_impl(repo)))

    @app.route('/commit/lengths')
    def commit_lengths():
        repo = request.args.get('url')
        return jsonify(status=status.request_success, message='OK', payload=stats.commit_lengths_impl(set_repo_impl(repo)))

    @app.route('/messages/words')
    def messages_words():
        repo = request.args.get('url')
        return jsonify(status=status.request_success, message='OK', payload=stats.messages_words_impl(set_repo_impl(repo)))

    @app.route('/commit/times')
    def commit_times():
        repo = request.args.get('url')
        return jsonify(status=status.request_success, message='OK', payload=stats.commit_times_impl(set_repo_impl(repo)))

    @app.route('/messages/emotions')
    def messages_emotions():
        repo = request.args.get('url')
        return jsonify(status=status.request_success, message='OK', payload=stats.messages_emotions_impl(set_repo_impl(repo)))

    return app

def init(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    return app