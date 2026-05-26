# ConstructAI Operations System

An AI automation system concept for construction companies. It covers quantity estimation, scheduling, coordination, quality control, budget analysis, project packages, vendor and supplier management, employee desk operations, material feasibility, usage, cost tracking, and layout planning.

## What Is Included

- `docs/system-blueprint.md` - full module-by-module system design.
- `docs/ai-workflows.md` - AI automation workflows for estimating, scheduling, quality, budget, vendors, and project packages.
- `docs/data-model.md` - core business records the system should track.
- `prototype/index.html` - clickable static dashboard prototype.
- `prototype/styles.css` - prototype visual styling.
- `prototype/app.js` - prototype sample data and interactions.

## Main Modules

- Quantity estimation
- AI scheduling
- Coordination hub
- Quality control
- Budget analysis
- Project package builder
- Vendor and supplier management
- Employee desk
- Material type, usage, cost, and feasibility analysis
- Layout and site planning

## How To Use The Prototype

Open this file in a browser:

`prototype/index.html`

The prototype is static, so it does not require a server.

You can now edit project information directly in the page:

- Change project name, client, location, dates, budget, and manager.
- Edit existing work packages directly in the table, including budget, forecast, owner, status, and notes.
- Edit existing materials directly in the table, including type, usage, unit cost, lead time, and feasibility.
- Edit vendors, suppliers, employees, and assignments directly in their tables.
- Add new rows when the project needs more packages, materials, vendors, or employees.
- Remove demo rows that do not fit your project.
- Use `Export Project` to download the project data as a JSON file.
- Use `Import Project` to load a previously exported project JSON file.
- Use `Reset Demo` to restore the original sample data.

Your edits are saved in your browser automatically.
