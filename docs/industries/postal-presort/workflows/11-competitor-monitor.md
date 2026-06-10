# 11 - Competitor Monitor (Add-On, NOT Default)

## Purpose

Cron weekly. Web-scrapes named competitor sites for pricing and messaging changes. Sends a monthly briefing to the owner. Paid add-on, not core SKU.

## Tags

`demo`, `postal-presort`, `add-on`, `competitor-intel`

## Inputs

Use `../demo-data/competitor-targets.json`.

## n8n Steps

1. Import `11-competitor-monitor.json` only when the add-on is purchased.
2. Pin the sample competitor targets.
3. Execute manually.
4. Confirm scrape captures pricing + messaging shifts.
5. If moving to production, connect approved scrape targets, robots.txt-respecting scrape config, and Resend template for monthly briefing.

## Productization Note

This workflow is **not part of the default SKU**. Sold separately as the "Competitor Intelligence Sprint" add-on ($1,500 setup + $250/mo per `industry-stack-review/postal-presort.md` §8).

## Demo Notes

NexSort had this workflow built bespoke. Productizing it as an add-on rather than a default keeps the core SKU lean while allowing high-touch clients to opt in.
