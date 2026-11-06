# Project Architecture Rules

- Keep standalone academic and partner program pages in `src/pages` and register them in the central React Router configuration, so navigation and direct URLs remain consistent.
- Render related Tutelr program routes through one shared page component, so their structure and calls to action stay consistent.
- Define program menu categories in shared navigation data and adapt desktop columns to the category count, so desktop and mobile show consistent offerings.