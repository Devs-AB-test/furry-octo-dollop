const core = require('@actions/core');
const github = require('@actions/github');

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');

const octokit = github.getOctokit(GITHUB_TOKEN);

const { context = {} } = github;
const { pull_request } = context.payload;

async function run(){
    await octokit.issues.createComment({
     ...context.repo,
     issue_number: pull_request.number,
     body: 'Good Job !! Thanks for contributing'
    });
}

run();
  
