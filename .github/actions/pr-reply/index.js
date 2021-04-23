const core = require('@actions/core');
const github = require('@actions/github');

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');

const octokit = github.getOctokit(GITHUB_TOKEN);

const { context = {} } = github;
const { pull_request } = context.payload;

async function run(){
    try{
      await octokit.issues.createComment({
       ...context.repo,
       issue_number: pull_request.number,
       body: 'Well Done!! Thanks for contributing'
      });
    }catch(error) {
    core.setFailed(`Error adding autoresponse: ${error.message}`);
    }
}

run();
  
