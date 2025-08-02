export const filterOptions = {
  ratings: [
    { value: "all-ratings", label: "All ratings" },
    { value: "5-stars", label: "5 stars only" },
    { value: "4-plus", label: "4+ stars" },
    { value: "3-plus", label: "3+ stars" },
  ],
  locations: [
    { value: "all-locations", label: "All locations" },
    { value: "nearby", label: "Nearby (< 5 miles)" },
    { value: "remote", label: "Remote available" },
    { value: "manhattan", label: "Manhattan" },
    { value: "brooklyn", label: "Brooklyn" },
    { value: "queens", label: "Queens" },
  ],
  responseTimes: [
    { value: "all-response-times", label: "All response times" },
    { value: "fast", label: "Fast response (< 2 hours)" },
    { value: "same-day", label: "Same day response" },
    { value: "within-week", label: "Within a week" },
  ],
  sortOptions: [
    { value: "best-match", label: "Sort by: best match" },
    { value: "rating", label: "Sort by: highest rating" },
    { value: "distance", label: "Sort by: nearest first" },
    { value: "price-low", label: "Sort by: price (low to high)" },
    { value: "price-high", label: "Sort by: price (high to low)" },
    { value: "reviews", label: "Sort by: most reviews" },
  ],
}
