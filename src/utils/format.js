export default {
  prettyDateTime(timestamp) {
    return new Intl.DateTimeFormat("en-AU", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(timestamp)
  }
}