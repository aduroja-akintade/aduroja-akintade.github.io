/* Original educational example for AI with Aduroja. No network calls or persistent storage. */
(function (root) {
  "use strict";
  const supportedServices = new Set(["email_automation", "ai_assistant", "crm_integration"]);

  function classifyLead(lead) {
    const id = typeof lead.leadId === "string" ? lead.leadId.trim() : "";
    const budget = lead.budget;
    const timeline = lead.timelineDays;
    if (!/^[A-Za-z0-9_-]{1,40}$/.test(id) ||
        !Number.isInteger(budget) || budget < 0 || budget > 1000000 ||
        !Number.isInteger(timeline) || timeline < 0 || timeline > 3650) {
      return {decision:"invalid", explanation:"The lead ID, budget or timeline does not meet the input contract. Reject it before any downstream action."};
    }
    if (lead.consent !== true) {
      return {decision:"do_not_contact", explanation:"Permission to contact is not granted. Do not send a sales message."};
    }
    if (!supportedServices.has(lead.service)) {
      return {decision:"human_review", explanation:"The requested service is not recognized. Route for a human to clarify the request."};
    }
    if (timeline <= 7 && budget >= 1000) {
      return {decision:"priority", explanation:"The requested deadline is within 7 days and the budget is at least €1,000."};
    }
    if (budget >= 500) {
      return {decision:"standard", explanation:"The request has a recognized service and budget of at least €500."};
    }
    return {decision:"nurture", explanation:"This request is below the example's standard budget threshold and may need clarification."};
  }

  if (typeof module === "object" && module.exports) module.exports = { classifyLead };

  if (typeof document === "undefined") return;
  const form = document.getElementById("lead-form");
  if (!form) return;
  const decisionEl = document.getElementById("decision");
  const explanationEl = document.getElementById("explanation");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const fields = new FormData(form);
    const output = classifyLead({
      leadId: fields.get("leadId"),
      service: fields.get("service"),
      budget: Number(fields.get("budget")),
      timelineDays: Number(fields.get("timeline")),
      consent: fields.get("consent") === "on"
    });
    decisionEl.textContent = output.decision.replaceAll("_", " ").toUpperCase();
    explanationEl.textContent = output.explanation;
    decisionEl.dataset.route = output.decision;
  });
})(typeof globalThis !== "undefined" ? globalThis : this);
