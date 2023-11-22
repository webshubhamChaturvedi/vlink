const gitlog = require('gitlog').default;
const gitBranch = require('git-branch');
const branchName = gitBranch.sync();
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "../public/text.json");

const commits = gitlog({
    repo: __dirname, 
    number: 1, 
    branch: branchName, 
  });

const {hash : commitHash} = commits[0];
fs.writeFileSync(filePath, JSON.stringify(commitHash, null, 2));
