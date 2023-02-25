const fs = require('fs')

// git-standup -m 5 -A "2023-02-25" -D "iso" > issues/standup
run()

function run() {
  const lines = fs
    .readFileSync('./standup', 'utf-8')
    .split('\n')
    .map(parseLine)
    .filter(Boolean)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const byDate = {}
  for (const line of lines) {
    byDate[line.date] = (byDate[line.date] || []).concat(`${line.message} <!-- ${line.commit} -->`)
  }

  let markdown = ''

  for (const date in byDate) {
    const messages = byDate[date]

    markdown += `### ${date}

**Features**

- ?

**Bugfixes**

- ?

**Chores**

- ?

**Internals**

- ?

**Uncategorized**

${messages.map((message) => `- *Unknown:* ${message}`).join('\n')}

---

`
  }

  const changelog = fs.readFileSync('./CHANGELOG.md', 'utf-8')
  fs.writeFileSync('./CHANGELOG.md', markdown + changelog, 'utf-8')
}

function parseLine(line) {
  line = line.trim()

  if (!line || line.startsWith('/projects/') || line.includes('No commits')) {
    return null
  }

  const matches = line.match(/^(\w*?) - (.*) \(([^ ]*) .* \+0000\)/)

  if (!matches) {
    console.log('Could not parse line: ' + line)
    process.exit(1)
  }

  const commit = matches[1]
  const message = matches[2]
  const date = matches[3]

  // Ignore commits that just bump the version
  if (message.match(/v+\d*\.\d*\.\d*/)) {
    return null
  }

  return { commit, message, date }
}
