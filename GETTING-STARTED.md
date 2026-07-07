# Getting Started — for Mat

Simple, non-technical steps. You talk to Codex; Codex does the work.

## Part 1 — One-time setup (about 10 minutes, only ever done once)

1. Install **Node.js** — go to https://nodejs.org and install the big green **LTS** button.
2. Install **Git** — go to https://git-scm.com/download/win and install (click Next through it).
3. Open a terminal (search "Terminal" or "PowerShell" in Windows) and run, one line at a time:
   ```
   git clone https://github.com/Mattglynn123/firstcontactthailand.git
   cd firstcontactthailand
   cd web
   npm install
   ```
   When it finishes, setup is done. You never do Part 1 again.

## Part 2 — Every time you want to work on the site

1. Open **Codex** in the `firstcontactthailand` folder.
2. First time only, paste this to Codex:
   > Read CODEX-START-HERE.md and follow it.
   After that, just tell Codex what you want in plain English, e.g.
   *"Make the homepage more modern"* or *"Fix the broken images on the Hire page."*
3. To **see the site** while you work, open a terminal in the folder and run:
   ```
   cd web
   npm run dev
   ```
   Then open **http://localhost:4321** in your browser. Leave it running — it
   updates live as Codex makes changes. (Press Ctrl+C in the terminal to stop.)
4. When you like a change, tell Codex: *"Save and push this."* (That backs it up
   to GitHub so nothing is ever lost and Daniel can see it too.)

## Part 3 — When you're happy with the whole site

1. Tell Codex:
   > I'm happy with the site — prepare it to go live.
   Codex gets it production-ready.
2. Message **Daniel** — he does the final step: switching your web address
   (firstcontactthailand.com) over to the new site.

That's it. Your old WordPress site stays running untouched the whole time as a
backup, until you're 100% happy.

## If you get stuck

- Message Daniel with a screenshot.
- Or tell Codex: *"Something's not working — here's what I see: [describe it]."*
