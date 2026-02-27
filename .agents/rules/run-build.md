---
trigger: always_on
---

To run the project build, the following commands need to be ran in the terminal. Preferably in Bash.

docker run -it --rm   -v "/$(pwd):/app"   -w //app   -p 3000:3000   --entrypoint sh   node:24-alpin

After this

npm run dev

