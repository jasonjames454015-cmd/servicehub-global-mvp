# US real-estate public-source desk (compliance-first)

Date: 2026-10-02
Status: research pointers only. Not an MLS, not brokerage, not a CMA, not an appraisal, and not a title search. Do not steer buyers. Do not hold client funds.

## Official release read 2026-10-01
FHFA news release, 29 September 2026:
https://www.fhfa.gov/news/news-release/fhfa-house-price-index-up-0.3-percent-in-july-up-2.6-percent-from-last-year

- Seasonally adjusted monthly purchase-only HPI: +0.3% in July 2026 versus June.
- July 2025 to July 2026: +2.6%.
- June month-on-month change remained 0.0% (unchanged from the prior report).
- Census-division monthly range: -0.8% Mountain to +1.5% Middle Atlantic.
- Census-division 12-month range: +0.6% Mountain to +6.3% Middle Atlantic.
- Next monthly report scheduled 27 October 2026 (data through August 2026).
- Method note from the same release: repeat-sales index. The flagship series is seasonally adjusted purchase-only data from Fannie Mae and Freddie Mac. It is not an MLS median and not a local CMA.

FHFA homepage housing-market table, read 2026-10-01 via the agency site:
- Purchase-only U.S. index, seasonally adjusted: +0.3% from 2026 Q1 to 2026 Q2; +2.1% from 2025 Q2 to 2026 Q2.
- Expanded-data U.S. index, seasonally adjusted: +0.4% quarterly; +2.5% four-quarter.
Source page: https://www.fhfa.gov/ (spotlight table dated with the 25 August 2026 Q2 report).

Do not merge the monthly July print with the quarterly Q2 print into one “the market is up X” sentence.

## FRED national medians read 2026-10-02
These are three different series. Do not average them. Do not treat any of them as a subject-property value. Worksheet: `products/price-screen-fred.txt`.

- Realtor.com via FRED, MEDLISPRIUS, median listing price, not seasonally adjusted. Sep 2026: $419,250. Aug: $424,500. Jul: $428,950. Jun: $430,000. May: $429,500. Page updated 1 Oct 2026. https://fred.stlouisfed.org/series/MEDLISPRIUS
- NAR via FRED, HOSMEDUSM052N, median sales price of existing homes, not seasonally adjusted. Aug 2026: $429,100. Jul: $436,400. Jun: $442,800. May: $431,200. Apr: $417,500. Page updated 10 Sep 2026. Next release listed 13 Oct 2026. Cite NAR and FRED. https://fred.stlouisfed.org/series/HOSMEDUSM052N
- Census and HUD via FRED, MSPNHSUS, median sales price for new houses sold, not seasonally adjusted. Aug 2026: $393,700. Jul: $392,200. Jun: $406,400. May: $414,300. Apr: $415,700. Page updated 24 Sep 2026. https://fred.stlouisfed.org/series/MSPNHSUS

## Free official / public sources
- FHFA HPI downloads: https://www.fhfa.gov/data/hpi
- FRED housing series above
- Census ACS / AHS: https://data.census.gov
- County assessor + recorder: search "[county] assessor" and "[county] recorder"
- County / city GIS parcels when the county publishes them
- data.gov parcel/cadastral search
- Zillow Research public downloads: https://www.zillow.com/research/data/ (read terms before any commercial reuse; not a substitute for a licensed valuation)

## What these sources are not
Live MLS status, a title plant, a licensed appraisal, or permission to scrape consumer listing sites.

## Fair-housing note
Housing-related pages must be available without regard to protected class. Do not add steering language, school-rating sales copy, or “good neighborhood” filters.

## Paid offer (only after a written yes)
One-market public-source screen for a licensed operator: FHFA metro/state print + FRED national context + assessor URL + what is still missing (taxes, flood, HOA, title). Quote band $180–$400. Zero sales recorded as of 2026-10-02.


## Rate print read 2026-10-03
Freddie Mac Primary Mortgage Market Survey, week ending 1 Oct 2026 (published Thursday). https://www.freddiemac.com/pmms
- 30-year fixed average 7.28%, up from 7.03% the prior week and 6.34% a year earlier.
- 15-year fixed average 6.60%, up from 6.42% the prior week and 5.55% a year earlier.
FRED MORTGAGE30US observation on 2026-10-01 was 7.28. https://fred.stlouisfed.org/series/MORTGAGE30US

FRED CSV re-read the same day. Latest observations unchanged from the 2 Oct note: MEDLISPRIUS Sep 2026 $419,250; HOSMEDUSM052N Aug 2026 $429,100; MSPNHSUS Aug 2026 $393,700.

Worksheet: `products/rate-screen-2026-10-03.txt`. Calculator: `pages/ratescreen.html`. Paid briefing band $80–$150 only after a written yes. Zero sales as of 2026-10-03.
