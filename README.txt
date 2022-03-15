Steps to compile:

1. Make sure Node.js is installed
2. Git Clone all files into editor
3. run 'npm install' if react-scripts is present, else:
   run 'npm install react-scripts --save'
4. run 'npm start'

Setting GIT host path:

//set GIT host path URL:
git remote set-url origin <URL>

//see existing URL
git config remote.origin.url

//set GH-pages install
git remote set-url origin https://github.com/austinmestayer/austinmestayer.github.io.git
git branch -M main
git push -u origin main
npm install gh-pages --save-dev
set deployment branch as gh-pages/main
run deploy
fail out
set deployment branch as gh-pages/docs
npm run deploy

//useful GIT commands

:::create new branch and push
git remote set-url origin <URL>
git config remote.origin.url
git pull
git checkout -b (new branch name)
git push origin (new branch name)

bruh