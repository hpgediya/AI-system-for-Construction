# AI Automation Workflows

## 1. Quantity Estimate Assistant

Trigger:

- New drawings, BOQ, or scope document uploaded.

Steps:

1. Read drawings, specifications, and project package.
2. Extract areas, lengths, counts, and material references.
3. Match extracted items to the company cost library.
4. Apply waste factors and labor productivity rates.
5. Compare results with historical projects.
6. Flag missing or uncertain items.
7. Generate quantity estimate and estimator review notes.

Human approval:

- Estimator reviews and locks the estimate.

## 2. Schedule Builder

Trigger:

- Project estimate is approved or project package is created.

Steps:

1. Identify major work packages.
2. Create task sequence.
3. Add dependencies.
4. Assign standard durations based on project type.
5. Match crews, materials, vendors, inspections, and equipment.
6. Identify critical path.
7. Generate baseline schedule.

Human approval:

- Project manager approves baseline schedule.

## 3. Coordination Assistant

Trigger:

- Meeting notes, daily reports, RFIs, and tasks are added.

Steps:

1. Summarize new coordination information.
2. Extract decisions, risks, blockers, and action items.
3. Assign responsible people.
4. Link action items to schedule tasks and packages.
5. Send reminders before due dates.

Human approval:

- Project manager confirms assignments.

## 4. Quality Control Assistant

Trigger:

- Inspection checklist, site note, or punch item is submitted.

Steps:

1. Classify issue type.
2. Match issue to work package, vendor, employee, or location.
3. Recommend corrective action.
4. Set reinspection date.
5. Update quality score.
6. Generate quality report.

Human approval:

- Quality inspector closes issue after evidence is reviewed.

## 5. Budget Risk Assistant

Trigger:

- Invoice, purchase order, quote, time sheet, or change order is added.

Steps:

1. Compare actual cost with budget.
2. Detect variance by cost code.
3. Forecast final cost.
4. Identify cause of variance.
5. Recommend action.
6. Draft budget report.

Human approval:

- Cost controller approves budget forecast changes.

## 6. Vendor Recommendation Assistant

Trigger:

- Procurement request is created.

Steps:

1. Match required material or service to approved vendors.
2. Compare price, availability, lead time, reliability, and quality history.
3. Check certifications, insurance, and contract status.
4. Recommend primary and backup suppliers.
5. Prepare quote comparison.

Human approval:

- Procurement manager selects vendor.

## 7. Material Feasibility Assistant

Trigger:

- User compares material types or substitutes.

Steps:

1. Read project specification and constraints.
2. Compare materials by cost, availability, lead time, durability, installation difficulty, layout fit, and compliance.
3. Estimate cost and schedule impact.
4. Identify risks.
5. Recommend best option.

Human approval:

- Project manager, engineer, or client approves substitute.

## 8. Project Package Assistant

Trigger:

- Tender, procurement, field, quality, or closeout package requested.

Steps:

1. Select required package template.
2. Pull relevant documents and project records.
3. Detect missing files.
4. Generate scope summary.
5. Add budget, schedule, vendors, quality, and contact details.
6. Create package index.

Human approval:

- Package owner reviews before sending.
