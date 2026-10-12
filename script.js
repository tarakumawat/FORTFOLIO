// EDIT THIS FILE to update your content. Leave url as "" for a placeholder button.
const GITHUB = "https://github.com/YOUR-USERNAME/soc-analyst-portfolio"; // <- replace
const ev = (gh, wu) => [
  {label: "GitHub repository", url: gh || ""}, {label: "Screenshots", url: ""},
  {label: "Write-up", url: wu || ""}, {label: "Demo", url: ""}, {label: "Technical documentation", url: ""}
];

const projects = [
  {
    title: "Microsoft 365 Device Code Phishing Investigation", status: "Resolved", tag: "Incident response",
    summary: "Investigated and contained a real account takeover, then hardened the tenant.",
    tools: ["Microsoft 365", "Entra ID", "Conditional Access", "Sign-in logs", "MFA", "DMARC"],
    what: "An investigation of a Microsoft 365 account takeover carried out through device code phishing.",
    why: "It happened in the organisation I administer, so I owned the response from detection to prevention.",
    objective: "Remove the attacker's access, find out whether anyone else was affected, and close the gap that allowed it.",
    did: ["Revoked the compromised sessions", "Removed the rogue device", "Checked other accounts for the same attacker", "Hardened MFA, device code flow and DMARC", "Documented the incident and recommendations for management"],
    skills: ["Identity incident response", "Sign-in log analysis", "Scoping an incident", "Incident reporting"],
    outcome: "Attacker access removed and controls tightened to reduce the chance of a repeat.",
    relevance: "Device code phishing abuses a legitimate sign-in flow rather than stealing a password, and is a common cloud identity threat that SOC teams are expected to detect and respond to (MITRE T1528).",
    evidence: ev(GITHUB + "/blob/main/incident-reports/03-m365-device-code-phishing.md")
  },
  {
    title: "Firewall Brute-Force Investigation", status: "Resolved", tag: "Network security",
    summary: "Traced daily network outages to brute-force attempts on an exposed FortiGate management port.",
    tools: ["FortiGate 80F", "Firewall logs"],
    what: "Troubleshooting of recurring daily network outages on a production firewall.",
    why: "Outages were disrupting the whole office and the cause was unknown.",
    objective: "Find the root cause and restore stable service.",
    did: ["Reviewed firewall logs and found 5-10 login attempts per second", "Identified the internet-exposed management port as the target", "Closed the port", "Documented the finding"],
    skills: ["Firewall log review", "Root cause analysis", "Attack surface reduction"],
    outcome: "Outages stopped after the management port was closed.",
    relevance: "Exposed admin interfaces are a routine target. The same pattern is detectable in a SIEM as failed logins per source over time (MITRE T1110).",
    evidence: ev(GITHUB + "/blob/main/incident-reports/01-firewall-bruteforce.md")
  },
  {
    title: "UDP Flood and FortiGate CPU Spike", status: "Resolved", tag: "Network security",
    summary: "Diagnosed a UDP flood and cut firewall CPU load from 85% to 15% with a DoS policy.",
    tools: ["FortiGate 80F", "DoS policy", "Traffic analysis"],
    what: "Investigation of a CPU spike (about 70%) on a production FortiGate firewall.",
    why: "High CPU put network performance and stability at risk.",
    objective: "Identify what was driving the load and bring it back to normal.",
    did: ["Analysed traffic and identified a UDP flood", "Applied a DoS policy", "Verified the effect on CPU", "Wrote it up on Medium"],
    skills: ["Traffic analysis", "DoS mitigation", "Performance monitoring"],
    outcome: "CPU load fell from 85% to 15%.",
    relevance: "Availability attacks and resource exhaustion are part of everyday SOC and network operations (MITRE T1498).",
    evidence: ev(GITHUB + "/blob/main/incident-reports/02-udp-flood-dos.md")
  },
  {
    title: "Wazuh SIEM Home Lab", status: "Ongoing", tag: "Lab",
    summary: "A self-built monitoring lab with a Wazuh manager and Windows and Linux endpoints.",
    tools: ["Wazuh", "Ubuntu", "Windows 11", "Kali Linux"],
    what: "A home lab with an Ubuntu Wazuh manager, a Windows 11 agent and a Kali Linux machine.",
    why: "To learn how SIEM collection, rules and alerting work in practice.",
    objective: "Generate attacks from Kali, see them detected on the endpoints, and tune the alerts.",
    did: ["Built the manager and enrolled the agents", "Published a setup guide on Medium", "Custom rules and attack simulations: in progress"],
    skills: ["SIEM deployment", "Endpoint telemetry", "Log collection", "Rule writing"],
    outcome: "A working lab I use to practise detection. Results will be added as I complete simulations.",
    relevance: "Wazuh concepts (agents, decoding, rules, alert triage) carry over to Splunk and Sentinel.",
    evidence: ev(GITHUB + "/tree/main/wazuh-lab")
  },
  {
    title: "Detection Library (KQL, SPL, Sigma, Wazuh)", status: "In progress", tag: "Detection engineering",
    summary: "The same detections written for several platforms, based on my own incidents.",
    tools: ["KQL", "SPL", "Sigma", "Wazuh rules"],
    what: "A set of detections for device code sign-ins and firewall admin brute force, in four formats.",
    why: "To prove I understand the detection logic rather than one tool's syntax, and to practise KQL and SPL.",
    objective: "Turn each incident I investigated into detection content that would catch it earlier.",
    did: ["Drafted detections for each incident", "Mapped them to MITRE ATT&CK", "Next: test against real or sample data"],
    skills: ["Detection engineering", "KQL", "SPL", "Sigma"],
    outcome: "Draft detections published in the repository. Testing and tuning are still to do.",
    relevance: "Writing and tuning detections is core detection engineering and SOC work.",
    evidence: ev(GITHUB + "/tree/main/detections")
  }
];

const competitions = [{
  name: "Competition name (placeholder)", result: "Result / placement", involved: "What the competition involved",
  areas: "Challenge areas covered", learned: "What I learned", evidence: "Evidence link (placeholder)"
}];
const areas = ["Log analysis", "Network security", "Windows and Linux", "Incident response", "SIEM basics", "Identity security"];
const certs = [
  ["CompTIA Security+", "Core security concepts: threats, access control, network security, risk, incident response."],
  ["Cisco CCNA", "Networking: routing, switching, VLANs, IP addressing, network troubleshooting."],
  ["Fortinet NSE 1", "Introductory threat landscape and Fortinet security concepts."],
  ["Fortinet NSE 2", "Fortinet security products and solutions overview."]
];
const community = [
  {t: "Technical write-ups", d: "I publish incident investigations and lab guides on Medium so others can learn from real cases.", link: "https://medium.com/@kumawattara1213", l: "Read on Medium"},
  {t: "Add an achievement (placeholder)", d: "Volunteering, mentoring, talks, awards or contributions. Describe the impact, not just the title.", dash: true}
];

const $ = s => document.querySelector(s);
const link = (e) => e.url
  ? `<a class="btn" href="${e.url}" target="_blank" rel="noopener">${e.label}</a>`
  : `<span class="btn ph" title="Add the real link in script.js">${e.label} (placeholder)</span>`;
const qa = (h, body) => `<div class="qa"><h4>${h}</h4>${Array.isArray(body) ? `<ul>${body.map(x => `<li>${x}</li>`).join("")}</ul>` : `<p>${body}</p>`}</div>`;

$("#projectGrid").innerHTML = projects.map((p, i) => `
  <button class="card proj" data-i="${i}" aria-label="Open ${p.title}">
    <span class="status">${p.status}</span><span class="tag">${p.tag}</span>
    <h3>${p.title}</h3><p>${p.summary}</p>
    <div>${p.tools.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join("")}</div>
    <span class="more">View details →</span>
  </button>`).join("");

$("#compGrid").innerHTML = competitions.map(c => `<div class="card dash"><h3>${c.name}</h3><p><b>Result:</b> ${c.result}</p><p><b>Involved:</b> ${c.involved}</p><p><b>Areas:</b> ${c.areas}</p><p><b>Learned:</b> ${c.learned}</p><span class="btn ph">${c.evidence}</span></div>`).join("");
$("#areas").innerHTML = areas.map(a => `<span class="tag">${a}</span>`).join("");
$("#certGrid").innerHTML = certs.map(c => `<div class="card"><h3>${c[0]}</h3><p>${c[1]}</p><span class="btn ph">Certificate link (placeholder)</span></div>`).join("");
$("#commGrid").innerHTML = community.map(c => `<div class="card ${c.dash ? "dash" : ""}"><h3>${c.t}</h3><p>${c.d}</p>${c.link ? `<a class="btn" href="${c.link}" target="_blank" rel="noopener">${c.l}</a>` : ""}</div>`).join("");

const modal = $("#modal");
document.addEventListener("click", e => {
  const b = e.target.closest(".proj");
  if (b) {
    const p = projects[b.dataset.i];
    $("#mBody").innerHTML = `<span class="tag">${p.tag}</span><span class="tag">${p.status}</span><h2 id="mTitle">${p.title}</h2>`
      + qa("What was it?", p.what) + qa("Why I did it", p.why) + qa("Objective", p.objective)
      + qa("Tools and technologies", p.tools.map(t => `<span class="tag">${t}</span>`).join("")).replace(/<ul>.*?<\/ul>/, "")
      + qa("What I did", p.did) + qa("Skills developed", p.skills) + qa("Outcome", p.outcome)
      + qa("Real-world relevance", p.relevance)
      + `<div class="qa"><h4>Evidence</h4><div class="btns">${p.evidence.map(link).join("")}</div><p class="note">Dashed buttons are placeholders until you add real links.</p></div>`;
    modal.showModal();
  }
  if (e.target === modal || e.target.id === "mClose") modal.close();
});

const io = new IntersectionObserver(es => es.forEach(x => x.isIntersecting && (x.target.classList.add("in"), io.unobserve(x.target))), {threshold: .08});
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
$("#yr").textContent = new Date().getFullYear();
