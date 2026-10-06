# HUD FY2026 Fair Market Rents — public read 2026-10-06

Not an appraisal. Not a rent quote for a unit. Not Small Area FMR. Not a voucher payment standard set by a housing authority.

## What was read

- Source: HUD GIS Open Data feature service `Fair_Market_Rents`, layer `FAIR_MARKET_RENTS`, queried 2026-10-06 with no API key.
- Endpoint: `https://services.arcgis.com/VTyQ9soqVukalItT/arcgis/rest/services/Fair_Market_Rents/FeatureServer/0/query`
- Coverage note on the dataset page: FY2026, 1 Oct 2025–30 Sep 2026.
- Method context: Federal Register notice 22 Aug 2025 (90 FR 41096 area) says FY2026 FMRs use ACS 2019–2023 base rents and OMB July 2023 metro definitions, effective 1 Oct 2025. Documentation: https://www.huduser.gov/portal/datasets/fmr.html
- FMRs are gross rents (shelter rent plus essential utilities) at the 40th percentile, used mainly for Housing Choice Voucher payment standards. They are not a median asking rent and not a subject-property value.

## Metro rows kept (lookalikes dropped)

Lookalikes returned by a name search and **not** used: Austin County TX; Dallas County MO, AL, AR; Houston County TN and TX.

| Area | Code | 0BR | 1BR | 2BR | 3BR | 4BR |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Atlanta-Sandy Springs-Roswell, GA HUD Metro FMR Area | METRO12060M12060 | 1585 | 1660 | 1820 | 2182 | 2605 |
| Austin-Round Rock-San Marcos, TX MSA | METRO12420M12420 | 1474 | 1562 | 1852 | 2347 | 2760 |
| Chicago-Joliet-Naperville, IL HUD Metro FMR Area | METRO16980M16980 | 1480 | 1581 | 1781 | 2294 | 2653 |
| Dallas, TX HUD Metro FMR Area | METRO19100M19100 | 1582 | 1648 | 1931 | 2431 | 3091 |
| Houston-The Woodlands-Sugar Land, TX HUD Metro FMR Area | METRO26420M26420 | 1280 | 1323 | 1573 | 2116 | 2639 |
| Phoenix-Mesa-Chandler, AZ MSA | METRO38060M38060 | 1457 | 1583 | 1839 | 2452 | 2720 |

Figures are US dollars per month as returned by the feature service. No inflation adjustment applied.

## How a desk can use this

Compare a proposed gross rent to the 2-bedroom FMR for the same HUD area only. A ratio above 1.0 means the proposal is above that area's 40th-percentile FMR. It does not mean the unit is overpriced. ZIP-level SAFMRs can differ. Confirm the current file on HUD User before any client briefing.

## Offer boundary

A written briefing of this table is listed at $80–$150 only after a written yes. This file is not a sale. Cash collected remains $0.
