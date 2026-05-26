const modules = {
  dashboard: {
    title: "Dashboard",
    status: "Live",
    description: "A central view of project health, cost, schedule, quality, materials, vendors, and employee workload.",
    details: [
      ["Health score", "82%", "Combines schedule, budget, quality, and procurement risk."],
      ["AI alerts", "9 open", "Three are high priority and need review this week."],
      ["Approvals", "14 pending", "Submittals, RFIs, change orders, and vendor documents."]
    ]
  },
  estimate: {
    title: "Quantity Estimate",
    status: "Estimator review",
    description: "AI extracts quantities from drawings and scope documents, applies waste factors, compares historical jobs, and produces a review-ready estimate.",
    details: [
      ["Concrete", "1,240 yd3", "Waste factor set to 4.5% based on project type."],
      ["Drywall", "96,800 ft2", "AI found a possible missing corridor wall type."],
      ["Confidence", "88%", "Needs estimator confirmation for level 4 finish areas."]
    ]
  },
  schedule: {
    title: "Scheduling",
    status: "Risk review",
    description: "The schedule engine connects tasks, dependencies, crews, vendors, equipment, inspections, and material delivery dates.",
    details: [
      ["Critical path", "Structural steel", "Late beams can move enclosure by 5 working days."],
      ["Lookahead", "3 weeks", "Crew and material conflicts highlighted."],
      ["Delay risk", "Medium", "Switchgear delivery is outside the preferred window."]
    ]
  },
  coordination: {
    title: "Coordination",
    status: "Active",
    description: "RFIs, submittals, daily logs, meeting notes, tasks, change requests, and approvals are organized in one hub.",
    details: [
      ["RFIs", "7 open", "Two are blocking layout confirmation."],
      ["Submittals", "21 pending", "Mechanical package has the highest review load."],
      ["Action items", "38 active", "AI summarized 12 from recent meeting notes."]
    ]
  },
  quality: {
    title: "Quality Control",
    status: "Field active",
    description: "Inspection checklists, punch items, photos, reinspection dates, and quality scores stay connected to packages and locations.",
    details: [
      ["Open issues", "17", "Five items are due before Friday."],
      ["Repeat defects", "3 types", "Waterproofing details need supervisor review."],
      ["Quality score", "91%", "Above company benchmark for similar projects."]
    ]
  },
  budget: {
    title: "Budget Analysis",
    status: "Forecasting",
    description: "Estimated, approved, committed, actual, and forecast costs are compared so overruns are visible before they become final losses.",
    details: [
      ["Baseline", "$4.67M", "Original approved project budget."],
      ["Forecast", "$4.82M", "Current projection based on orders and invoices."],
      ["Variance", "+$145K", "Main drivers are steel and overtime."]
    ]
  },
  package: {
    title: "Project Package",
    status: "Draft",
    description: "Tender, procurement, field execution, quality, and closeout packages can be assembled from live project records.",
    details: [
      ["Documents", "42 included", "Drawings, specs, estimates, schedules, and contacts."],
      ["Missing", "5 items", "AI found missing warranty and inspection forms."],
      ["Package type", "Procurement", "Ready for manager review before vendor release."]
    ]
  },
  vendors: {
    title: "Vendors and Suppliers",
    status: "Comparing",
    description: "Supplier quotes, lead times, certifications, insurance, purchase orders, delivery performance, and scorecards are managed together.",
    details: [
      ["Approved vendors", "86", "Twelve support current project packages."],
      ["Quote comparisons", "6 active", "Steel package has best alternate value."],
      ["Expiring docs", "4", "Insurance and certificates need renewal checks."]
    ]
  },
  employees: {
    title: "Employee Desk",
    status: "Operational",
    description: "Employee tasks, attendance, timesheets, availability, certifications, training, and project assignments are visible to managers.",
    details: [
      ["Assigned staff", "64", "Across field, office, and supervision roles."],
      ["Overtime risk", "2 crews", "AI recommends rebalancing drywall crew next week."],
      ["Certification gaps", "3", "Lift training expires before upcoming task date."]
    ]
  },
  materials: {
    title: "Materials",
    status: "Feasibility",
    description: "Material type, usage, unit cost, supplier availability, code fit, lead time, durability, installation difficulty, and layout impact are compared.",
    details: [
      ["Alternates", "8 reviewed", "Two meet spec and reduce lead time."],
      ["Cost impact", "-$38K", "Potential savings from approved cladding substitute."],
      ["Feasibility", "Good", "Recommended option fits cost and schedule constraints."]
    ]
  },
  layout: {
    title: "Layout",
    status: "Planning",
    description: "Site logistics, storage areas, access routes, equipment zones, delivery locations, safety zones, and workface planning are coordinated.",
    details: [
      ["Storage zones", "6", "Glazing needs covered storage near east access."],
      ["Congestion risk", "High", "Crane and delivery overlap on level 2 pour date."],
      ["Suggested change", "Move laydown", "AI recommends shifting steel laydown 18 meters west."]
    ]
  }
};

const alerts = [
  ["warning", "Steel delivery risk", "Lead time increased by 9 days. Review alternate supplier before Friday."],
  ["danger", "Budget overrun forecast", "Structural package is projected $92K above baseline."],
  ["info", "Quality trend", "Waterproofing defects repeated in three locations. Add focused inspection."],
  ["warning", "Crew allocation", "Drywall crew is overbooked next week by 68 labor hours."]
];

const packages = [
  ["Structural Steel", "At Risk", "$820K", "$912K", "Procurement", "Supplier lead time and price escalation need review."],
  ["Concrete", "On Track", "$640K", "$628K", "Site Team", "Usage is below estimate after updated pour plan."],
  ["Electrical", "Watch", "$710K", "$746K", "MEP Lead", "Switchgear delivery may affect commissioning."],
  ["Drywall", "On Track", "$390K", "$384K", "Interiors", "Crew productivity is slightly above benchmark."],
  ["Glazing", "At Risk", "$560K", "$598K", "Procurement", "Alternate vendor has shorter lead time but higher unit cost."]
];

const moduleTitle = document.querySelector("#module-title");
const moduleStatus = document.querySelector("#module-status");
const moduleDescription = document.querySelector("#module-description");
const moduleDetails = document.querySelector("#module-details");
const alertList = document.querySelector("#alert-list");
const packageTable = document.querySelector("#package-table");

function renderModule(key) {
  const module = modules[key];
  moduleTitle.textContent = module.title;
  moduleStatus.textContent = module.status;
  moduleDescription.textContent = module.description;
  moduleDetails.innerHTML = module.details.map(([label, value, note]) => `
    <div class="detail-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </div>
  `).join("");
}

function renderAlerts() {
  alertList.innerHTML = alerts.map(([level, title, note]) => `
    <div class="alert ${level}">
      <strong>${title}</strong>
      <span>${note}</span>
    </div>
  `).join("");
}

function renderPackages() {
  packageTable.innerHTML = packages.map(([name, status, budget, forecast, owner, note]) => {
    const statusClass = status === "On Track" ? "good" : "risk";
    return `
      <tr>
        <td>${name}</td>
        <td><span class="pill ${statusClass}">${status}</span></td>
        <td>${budget}</td>
        <td>${forecast}</td>
        <td>${owner}</td>
        <td>${note}</td>
      </tr>
    `;
  }).join("");
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderModule(button.dataset.module);
  });
});

renderModule("dashboard");
renderAlerts();
renderPackages();
