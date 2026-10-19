/* Built-in Node test runner; no external dependencies or secrets. */
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const root = path.resolve(__dirname, "../academy-cloudflare");
const fixturePath = path.join(root, "learn/starter-fixtures.json");
const fixtures = JSON.parse(fs.readFileSync(fixturePath, "utf8"));
const { classifyLead } = require(path.join(root, "learn/lead-router.js"));

let checks = 0;
for (const item of fixtures.cases) {
  const result = classifyLead(item.input);
  assert.equal(result.decision, item.expected, item.id + " route mismatch");
  checks++;
}
assert.equal(fixtures.cases.length, 6, "Expected exactly six documented test fixtures");
for (const [name, input, expected] of [
  ["Boundary priority", {leadId:"T-01",service:"crm_integration",budget:1000,timelineDays:7,consent:true}, "priority"],
  ["Budget boundary", {leadId:"T-02",service:"crm_integration",budget:500,timelineDays:12,consent:true}, "standard"],
  ["Missing lead ID", {leadId:"",service:"crm_integration",budget:1000,timelineDays:2,consent:true}, "invalid"],
  ["Fractional budget", {leadId:"T-04",service:"crm_integration",budget:500.5,timelineDays:2,consent:true}, "invalid"],
  ["Unknown service", {leadId:"T-05",service:"undefined",budget:5000,timelineDays:1,consent:true}, "human_review"]
]) {
  assert.equal(classifyLead(input).decision, expected, name);
  checks++;
}

const htmlPaths = [
  "index.html",
  "learn/index.html",
  "learn/first-workflow.html",
  "work/cupid-routing.html"
];
for (const relativePath of htmlPaths) {
  const absolute = path.join(root, relativePath);
  const html = fs.readFileSync(absolute, "utf8");
  assert.match(html, /<html lang="en">/, relativePath + ": missing document language");
  assert.match(html, /<title>[^<]+<\/title>/, relativePath + ": missing title");
  assert.match(html, /<main\b/, relativePath + ": missing main landmark");
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (!value.startsWith("./") && !value.startsWith("../")) continue;
    const target = value.split(/[?#]/)[0];
    if (!target) continue;
    const resolved = path.resolve(path.dirname(absolute), target);
    assert.ok(resolved.startsWith(root + path.sep) || resolved === root, relativePath + ": relative link escapes site root " + value);
    assert.ok(fs.existsSync(resolved), relativePath + ": broken relative link " + value);
    if (fs.statSync(resolved).isDirectory()) {
      assert.ok(fs.existsSync(path.join(resolved, "index.html")), relativePath + ": directory missing index.html " + value);
    }
    checks++;
  }
}
console.log("PASS: " + checks + " route, boundary and local-link checks.");
