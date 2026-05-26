# Core Data Model

## Project

- Project ID
- Name
- Client
- Address
- Project type
- Start date
- Target completion date
- Contract value
- Status
- Project manager
- Site supervisor

## Work Package

- Package ID
- Project ID
- Name
- Trade
- Scope
- Status
- Start date
- Finish date
- Budget
- Forecast cost
- Assigned vendor
- Assigned crew

## Quantity Item

- Item ID
- Project ID
- Work package ID
- Description
- Material type
- Unit
- Quantity
- Waste factor
- Unit cost
- Labor hours
- Confidence level
- Source document

## Schedule Task

- Task ID
- Project ID
- Work package ID
- Name
- Duration
- Start date
- Finish date
- Dependencies
- Assigned crew
- Required materials
- Required equipment
- Status
- Delay risk

## Budget Line

- Budget line ID
- Project ID
- Cost code
- Description
- Estimated cost
- Approved budget
- Committed cost
- Actual cost
- Forecast cost
- Variance

## Vendor

- Vendor ID
- Company name
- Contact person
- Email
- Phone
- Service or material category
- Approved status
- Average lead time
- Quality score
- Delivery score
- Price score
- Insurance expiry
- Certification expiry

## Material

- Material ID
- Name
- Type
- Specification
- Unit
- Standard cost
- Preferred supplier
- Lead time
- Durability rating
- Installation difficulty
- Waste factor
- Feasibility notes

## Employee

- Employee ID
- Name
- Role
- Trade
- Project assignment
- Certifications
- Availability
- Hourly cost
- Attendance status
- Productivity notes

## Quality Issue

- Issue ID
- Project ID
- Location
- Work package
- Description
- Severity
- Responsible party
- Photo evidence
- Open date
- Due date
- Close date
- Status

## Project Package

- Package ID
- Project ID
- Package type
- Included documents
- Missing documents
- Prepared by
- Review status
- Approval status
- Sent date

## AI Alert

- Alert ID
- Project ID
- Module
- Severity
- Message
- Recommendation
- Related record
- Created date
- Status
